const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  message: String,
  age: Number,
  gender: String,
  meetupArea: String
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
