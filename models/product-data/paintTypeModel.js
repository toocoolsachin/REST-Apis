const mongoose = require('mongoose');

const paintTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const PaintType = mongoose.model('PaintType', paintTypeSchema);
module.exports = PaintType;
