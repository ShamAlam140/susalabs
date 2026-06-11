const express = require("express");
const router = express.Router();
const contactFormController = require("../controller/contactFormC");
const authMiddleware = require('../middeleware/Admin');
// Create a new contact form entry
router.post("/contactform", contactFormController.createContactForm);

// Get all contact form entries
router.get("/contact-form",authMiddleware, contactFormController.getAllContactForms);



// Delete a contact form entry by ID
router.delete("/contact-form/:id",authMiddleware, contactFormController.deleteContactForm);

module.exports = router;
