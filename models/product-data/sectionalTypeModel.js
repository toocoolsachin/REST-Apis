const mongoose = require('mongoose');

const sectionalTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const SectionalType = mongoose.model('SectionalType', sectionalTypeSchema);
module.exports = SectionalType;
