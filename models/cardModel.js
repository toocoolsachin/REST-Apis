const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardName: {
    type: String,
    required: true,
    max: 255
  },
  description: {
    type: String
  },
  idAttachmentCover: {
    type: String
  },
  idMembers: {
    type: Array
  },
  idLabels: {
    type: Array
  },
  attachments: {
    type: Array
  },
  subscribed: {
    type: Boolean
  },
  checklists: {
    type: Array,
    checkItems: {
      type: Array
    }
  },
  checkItemsChecked: {
    type: Number
  },
  comments: {
    type: Array
  },
  activities: {
    type: Array
  },
  due: {
    type: Date
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
