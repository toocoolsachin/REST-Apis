const mongoose = require('mongoose');

const checkListSchema = new mongoose.Schema({
  name: {
    type: String
  },
  checkItems: {
    type: Array
  }
});

const CheckList = mongoose.model('CheckList', checkListSchema);
module.exports = CheckList;
