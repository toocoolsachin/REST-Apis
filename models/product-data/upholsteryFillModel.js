const mongoose = require('mongoose');

const upholsteryFillSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const UpholsteryFill = mongoose.model('UpholsteryFill', upholsteryFillSchema);
module.exports = UpholsteryFill;
