// Validation
const joi = require('@hapi/joi');

// Register validation
const registerValidation = data => {
  const validationSchema = {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi
      .string()
      .required()
      .email(),
    phone: joi.number().required(),
    password: joi
      .string()
      .min(8)
      .required(),
    passwordConfirm: joi
      .string()
      .min(8)
      .required(),
    role: joi.string()
  };
  return joi.validate(data, validationSchema);
};

// Login Validation
const loginValidation = data => {
  const validationSchema = {
    email: joi
      .string()
      .required()
      .email(),
    password: joi
      .string()
      .min(8)
      .required()
  };
  return joi.validate(data, validationSchema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
