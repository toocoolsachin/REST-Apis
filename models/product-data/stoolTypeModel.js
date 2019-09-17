const mongoose = require('mongoose');

const stoolTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const StoolType = mongoose.model('StoolType', stoolTypeSchema);
module.exports = StoolType;
