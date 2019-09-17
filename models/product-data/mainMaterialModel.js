const mongoose = require('mongoose');

const mainMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const MainMaterial = mongoose.model('MainMaterial', mainMaterialSchema);
module.exports = MainMaterial;
