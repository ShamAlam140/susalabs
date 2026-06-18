const ContactForm = require("../Model/contactForm");
const sendEmailNotification = require("../utils/sendEmail");

// Create a new contact form entry
exports.createContactForm = async (req, res) => {
  try {
    const newContactForm = new ContactForm(req.body);
    const savedForm = await newContactForm.save();

    // Trigger email notification asynchronously
    const emailSubject = `New Contact Form Submission: ${savedForm.subject}`;
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${savedForm.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${savedForm.email}">${savedForm.email}</a></p>
      <p><strong>Subject:</strong> ${savedForm.subject}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; border-left: 10px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px;">
        ${savedForm.message.replace(/\n/g, '<br/>')}
      </blockquote>
      <hr/>
      <p><em>Received at: ${new Date(savedForm.createdAt).toLocaleString()}</em></p>
    `;
    console.log(`📬 [Contact Form] New submission from ${savedForm.name} (${savedForm.email}). Sending email notification...`);
    sendEmailNotification(emailSubject, emailHtml);

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
