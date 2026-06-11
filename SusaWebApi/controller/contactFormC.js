const ContactForm = require("../Model/contactForm");

// Create a new contact form entry
exports.createContactForm = async (req, res) => {
  try {
    const newContactForm = new ContactForm(req.body);
    const savedForm = await newContactForm.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all contact form entries
exports.getAllContactForms = async (req, res) => {
  try {
    const contactForms = await ContactForm.find().sort({ _id: -1 }).limit(0);
    res.json(contactForms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single contact form entry by ID


// Delete a contact form entry by ID
exports.deleteContactForm = async (req, res) => {
  try {
    const deletedForm = await ContactForm.findByIdAndDelete(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ message: "Contact form not found" });
    }
    res.json({ message: "Contact form deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
