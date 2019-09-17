const mongoose = require('mongoose');

const seatMaterialSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const SeatMaterial = mongoose.model('SeatMaterial', seatMaterialSchema);
module.exports = SeatMaterial;
