const mongoose = require("mongoose");

const resumeFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Resume = mongoose.model("Resume", resumeFormSchema);

module.exports = Resume;
