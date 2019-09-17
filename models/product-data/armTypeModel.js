const mongoose = require('mongoose');

const armTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const ArmType = mongoose.model('ArmType', armTypeSchema);
module.exports = ArmType;
