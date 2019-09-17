const mongoose = require('mongoose');

const bedSizeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const BedSize = mongoose.model('BedSize', bedSizeSchema);
module.exports = BedSize;
