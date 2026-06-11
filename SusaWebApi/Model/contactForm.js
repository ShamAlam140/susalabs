// models/AddBlogModel.js
const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const contactForm = mongoose.model("contactForm", contactFormSchema);

module.exports = contactForm;
