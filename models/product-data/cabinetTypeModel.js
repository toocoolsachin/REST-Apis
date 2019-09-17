const mongoose = require('mongoose');

const cabinetTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const CabinetType = mongoose.model('CabinetType', cabinetTypeSchema);
module.exports = CabinetType;
