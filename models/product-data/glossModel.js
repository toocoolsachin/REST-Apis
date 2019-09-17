const mongoose = require('mongoose');

const glossSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Gloss = mongoose.model('Gloss', glossSchema);
module.exports = Gloss;
