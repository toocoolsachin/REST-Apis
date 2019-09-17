const mongoose = require('mongoose');

const feltLinedDrawersSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const FeltLinedDrawers = mongoose.model('FeltLinedFrawers', feltLinedDrawersSchema);
module.exports = FeltLinedDrawers;
