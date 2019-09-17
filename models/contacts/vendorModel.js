const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  contact_person: {
    type: String
  },
  address: {
    type: String
  },
  domain: {
    type: String
  },
  avatar: {
    type: String
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
