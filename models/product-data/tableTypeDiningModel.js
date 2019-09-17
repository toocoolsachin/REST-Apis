const mongoose = require('mongoose');

const tableTypeDiningSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TableTypeDining = mongoose.model('TableTypeDining', tableTypeDiningSchema);
module.exports = TableTypeDining;
