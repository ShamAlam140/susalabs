const Admin = require('../Model/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mnbvcxzasdfghjklpoiuytrewq'; // ENV में डालना सही रहेगा

// Signup
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({ email, password: hashedPassword });
    res.status(201).json({ id: newAdmin._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1d' });
    admin.token = token;
    await admin.save();

    res.status(200).json({ token:token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Logout
exports.logout = async (req, res) => {
  const { token } = req.body;
  try {
    const admin = await Admin.findOne({ token });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    admin.token = null;
    await admin.save();

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
