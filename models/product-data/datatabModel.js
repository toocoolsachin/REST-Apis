const mongoose = require('mongoose');

const datatabSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Datatab = mongoose.model('Datatab', datatabSchema);
module.exports = Datatab;
