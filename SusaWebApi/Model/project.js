
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String },
  link: { type: String },
  description: { type: String },
  image: {
   type:String
  },
});

module.exports = mongoose.model("project", projectSchema);
