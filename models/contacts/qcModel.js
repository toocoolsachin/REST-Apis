const mongoose = require('mongoose');

const qcSchema = new mongoose.Schema({
  name: {
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
  domain: {
    type: String
  },
  location: {
    type: String
  },
  avatar: {
    type: String
  }
});

const QC = mongoose.model('QC', qcSchema);
module.exports = QC;
