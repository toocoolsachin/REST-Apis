const mongoose = require('mongoose');

const lampTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const LampType = mongoose.model('LampType', lampTypeSchema);
module.exports = LampType;
