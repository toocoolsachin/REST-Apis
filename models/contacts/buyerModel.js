const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  contact_person: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  requirement: {
    type: String
  },
  file: {
    type: String
  },
  avatar: {
    type: String
  }
});

const Buyer = mongoose.model('Buyer', buyerSchema);
module.exports = Buyer;