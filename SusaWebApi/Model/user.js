// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
   
      lowercase: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    projectTitle
    :{
    type: String,
    required: true,
    trim: true,

   },
   projectUrl
   :{
    type: String,
    required: true,
    trim: true,

   }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
