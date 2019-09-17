const mongoose = require('mongoose');

const hangingDirectionSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const HangingDirection = mongoose.model('HangingDirection', hangingDirectionSchema);
module.exports = HangingDirection;
