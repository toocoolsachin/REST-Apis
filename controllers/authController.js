const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');

exports.register = async (req, res) => {
  // validate the data before saving a user
  // const { error } = registerValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // check if the user is already registered
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // password encryption
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const person = await User.create({
    name: req.body.displayName,
    email: req.body.email,
    password: hashedPassword,
    passwordConfirm: hashedPassword
  });

  res.json({
    data: person
  });
};

// Login a user
exports.login = async (req, res) => {
  // validate the data before logging in
  // const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);
  // check if user registered or not
  const user = await User.findOne({ email: req.body.data.email });
  if (!user) return res.status(400).send('Email not found');

  // password validation
  const validPassword = await bcrypt.compare(
    req.body.data.password,
    user.password
  );
  if (!validPassword) return res.status(400).send('Invalid Password!');

  // making and assign a token
  const token = jwt.sign({ user }, process.env.TOKEN_SECRET);
  res.json({ data: { user: user, access_token: token } });
};
