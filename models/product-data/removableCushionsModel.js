const mongoose = require('mongoose');

const removableCushionSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const RemovableCushion = mongoose.model('RemovableCushion', removableCushionSchema);
module.exports = RemovableCushion;
