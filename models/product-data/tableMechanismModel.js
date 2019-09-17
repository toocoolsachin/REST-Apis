const mongoose = require('mongoose');

const tableMechanismSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TableMechanism = mongoose.model('TableMechanism', tableMechanismSchema);
module.exports = TableMechanism;
