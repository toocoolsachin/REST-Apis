const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    max: 255
  },
  settings: {
    color: { type: String },
    subscribed: { type: Boolean },
    cardCoverImages: { type: Boolean }
  },
  lists: {
    type: Array
  },
  cards: {
    type: Array
  },
  members: {
    type: Array
  },
  labels: {
    type: Array
  }
});

const Board = mongoose.model('Board', boardSchema);
module.exports = Board;
