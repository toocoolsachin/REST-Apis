const mongoose = require('mongoose');

const upholsteryTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const UpholsteryType = mongoose.model('UpholsteryType', upholsteryTypeSchema);
module.exports = UpholsteryType;
