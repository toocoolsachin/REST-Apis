const mongoose = require('mongoose');

const hardwareMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const HardwareMaterial = mongoose.model('HardwareMaterial', hardwareMaterialSchema);
module.exports = HardwareMaterial;
