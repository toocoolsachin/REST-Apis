const mongoose = require('mongoose');

const mirrorTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const MirrorType = mongoose.model('MirrorType', mirrorTypeSchema);
module.exports = MirrorType;
