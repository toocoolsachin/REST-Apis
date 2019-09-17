const mongoose = require('mongoose');

const armAdjTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const ArmAdjType = mongoose.model('ArmAdjType', armAdjTypeSchema);
module.exports = ArmAdjType;
