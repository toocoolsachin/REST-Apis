const mongoose = require('mongoose');

const upholsteryProductTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const UpholsteryProductType = mongoose.model('UpholsteryProductType', upholsteryProductTypeSchema);
module.exports = UpholsteryProductType;
