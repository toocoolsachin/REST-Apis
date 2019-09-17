const mongoose = require('mongoose');

const hangingMethodSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const HangingMethod = mongoose.model('HangingMethod', hangingMethodSchema);
module.exports = HangingMethod;
