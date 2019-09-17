const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
    max: 255
  },
  idCards: {
    type: Array
  }
});

const List = mongoose.model('List', listSchema);
module.exports = List;
