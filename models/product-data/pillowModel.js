const mongoose = require('mongoose');

const pillowSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Pillow = mongoose.model('Pillow', pillowSchema);
module.exports = Pillow;
