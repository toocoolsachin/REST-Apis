const mongoose = require('mongoose');

const bedStorageTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const BedStorageType = mongoose.model('BedStorageType', bedStorageTypeSchema);
module.exports = BedStorageType;
