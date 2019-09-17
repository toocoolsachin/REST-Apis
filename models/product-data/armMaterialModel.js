const mongoose = require('mongoose');

const armMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const ArmMaterial = mongoose.model('ArmMaterial', armMaterialSchema);
module.exports = ArmMaterial;
