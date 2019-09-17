const mongoose = require('mongoose');

const assemblyLevelSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const AssemblyLevel = mongoose.model('AssemblyLevel', assemblyLevelSchema);
module.exports = AssemblyLevel;
