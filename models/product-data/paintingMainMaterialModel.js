const mongoose = require('mongoose');

const paintingMainMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const PaintingMainMaterial = mongoose.model('PaintingMainMaterial', paintingMainMaterialSchema);
module.exports = PaintingMainMaterial;
