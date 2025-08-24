const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: {
    type: String,
    unique: true,   // ensures phone number is unique
    required: true, // optional but recommended
    trim: true
  },
  message: String,
  age: Number,
  gender: String,
  meetupArea: String
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
