const mongoose = require('mongoose');

const cleaningCodeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const CleaningCode = mongoose.model('CleaningCode', cleaningCodeSchema);
module.exports = CleaningCode;
