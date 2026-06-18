const UserForm = require('../Model/ChatForm');
const sendEmailNotification = require("../utils/sendEmail");

// 👉 Create a new form entry
exports.createUserForm = async (req, res) => {
  try {
    const newUser = new UserForm(req.body);
    const savedUser = await newUser.save();

    // Trigger email notification asynchronously
    const emailSubject = `New Chat/Contact Request from ${savedUser.name}`;
    const emailHtml = `
      <h2>New Chat Form Submission</h2>
      <p><strong>Name:</strong> ${savedUser.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${savedUser.email}">${savedUser.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${savedUser.phone}">${savedUser.phone}</a></p>
      <hr/>
      <p><em>Received at: ${new Date(savedUser.createdAt).toLocaleString()}</em></p>
    `;
    console.log(`💬 [Chat Form] New submission from ${savedUser.name} (${savedUser.email}). Sending email notification...`);
    sendEmailNotification(emailSubject, emailHtml);

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Get all form entries
exports.getAllUserForms = async (req, res) => {
  try {
    const users = await UserForm.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 Get a single form entry by ID
exports.getUserFormById = async (req, res) => {
  try {
    const user = await UserForm.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 Update a form entry by ID
exports.updateUserForm = async (req, res) => {
  try {
    const updatedUser = await UserForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Delete a form entry by ID
exports.deleteUserForm = async (req, res) => {
  try {
    const deletedUser = await UserForm.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
