const mongoose = require('mongoose');

const dresserTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const DresserType = mongoose.model('DresserType', dresserTypeSchema);
module.exports = DresserType;
