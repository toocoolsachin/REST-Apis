const mongoose = require('mongoose');

const mirrorShapeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const MirrorShape = mongoose.model('MirrorShape', mirrorShapeSchema);
module.exports = MirrorShape;
