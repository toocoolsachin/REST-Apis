const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: 8
  }
});

const User = mongoose.model('Users', userSchema);
module.exports = User;
