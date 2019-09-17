const mongoose = require('mongoose');

const feetMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const FeetMaterial = mongoose.model('FeetMaterial', feetMaterialSchema);
module.exports = FeetMaterial;
