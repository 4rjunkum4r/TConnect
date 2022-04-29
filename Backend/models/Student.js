const mongoose = require("mongoose");
const { Schema } = mongoose;
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
  },
  registrationNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("students", StudentSchema);
