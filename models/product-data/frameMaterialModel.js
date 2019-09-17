const mongoose = require('mongoose');

const frameMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const FrameMaterial = mongoose.model('FrameMaterial', frameMaterialSchema);
module.exports = FrameMaterial;
