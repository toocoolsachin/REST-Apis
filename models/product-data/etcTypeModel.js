const mongoose = require('mongoose');

const etcTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const etcType = mongoose.model('etcType', etcTypeSchema);
module.exports = etcType;
