const mongoose = require('mongoose');

const topMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TopMaterial = mongoose.model('TopMaterial', topMaterialSchema);
module.exports = TopMaterial;
