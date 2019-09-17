const mongoose = require('mongoose');

const tuftedSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Tufted = mongoose.model('Tufted', tuftedSchema);
module.exports = Tufted;
