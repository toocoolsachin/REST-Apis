const mongoose = require('mongoose');

const ledTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const LEDtype = mongoose.model('LEDtype', ledTypeSchema);
module.exports = LEDtype;
