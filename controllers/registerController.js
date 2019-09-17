const User = require('../models/userModel');

exports.register = async (req, res) => {
  const person = await User.create({
    name: req.body.displayName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });
  const savedUser = person.save();
  res.json({
    data: savedUser
  });
};
