const mongoose = require('mongoose');

const benchTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const BenchType = mongoose.model('BenchType', benchTypeSchema);
module.exports = BenchType;
