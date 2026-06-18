const User = require('../Model/user');
const sendEmailNotification = require("../utils/sendEmail");

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, contact, projectTitle, projectUrl } = req.body;

    // 🧹 Remove unique email check
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'User already exists with this email' });
    // }

    const newUser = new User({ name, email, contact, projectTitle, projectUrl });
    await newUser.save();

    // Trigger email notification asynchronously
    const emailSubject = `New Demo Request: ${newUser.projectTitle}`;
    const emailHtml = `
      <h2>New Demo Request Registered</h2>
      <p><strong>Product Name:</strong> ${newUser.projectTitle}</p>
      <p><strong>Client Name:</strong> ${newUser.name}</p>
      <p><strong>Email Address:</strong> <a href="mailto:${newUser.email}">${newUser.email}</a></p>
      <p><strong>Contact Number:</strong> <a href="tel:${newUser.contact}">${newUser.contact}</a></p>
      <p><strong>Product Link:</strong> <a href="${newUser.projectUrl}" target="_blank">${newUser.projectUrl}</a></p>
      <hr/>
      <p><em>Received at: ${new Date(newUser.createdAt || Date.now()).toLocaleString()}</em></p>
    `;
    console.log(`🎁 [Demo Request] New request from ${newUser.name} for project: ${newUser.projectTitle}. Sending email notification...`);
    sendEmailNotification(emailSubject, emailHtml);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error while registering user' });
  }
};


// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error('Get Users Error:', err);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};


// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    console.error('Get User Error:', error);
    res.status(500).json({ message: 'Server error while fetching user' });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { name, email, contact, number } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, contact, number },
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Update User Error:', error);
    res.status(500).json({ message: 'Server error while updating user' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete User Error:', error);
    res.status(500).json({ message: 'Server error while deleting user' });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
