const mongoose = require("mongoose");
const { Schema } = mongoose;
const TeachersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
  },
  teacherID: {
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

module.exports = mongoose.model("Teachers", TeachersSchema);
