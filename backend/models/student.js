const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
  mongoose.models.Student ||
  mongoose.model("Student", studentSchema);