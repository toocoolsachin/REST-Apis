const mongoose = require('mongoose');

const merchandiserSchema = new mongoose.Schema({
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
  avatar: {
    type: String
  }
});

const Merchandiser = mongoose.model('Merchandiser', merchandiserSchema);
module.exports = Merchandiser;
