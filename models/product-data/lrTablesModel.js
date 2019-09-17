const mongoose = require('mongoose');

const lrTableSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const LrTable = mongoose.model('LrTable', lrTableSchema);
module.exports = LrTable;
