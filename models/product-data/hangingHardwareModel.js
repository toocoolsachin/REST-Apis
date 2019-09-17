const mongoose = require('mongoose');

const hangingHardwareSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const HangingHardware = mongoose.model('HangingHardware', hangingHardwareSchema);
module.exports = HangingHardware;
