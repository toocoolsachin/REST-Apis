const mongoose = require('mongoose');

const checkListItemSchema = new mongoose.Schema({
  item: {
    type: String
  },
  isChecked: {
    type: Boolean
  }
});

const CheckListItem = mongoose.model('CheckListItem', checkListItemSchema);
module.exports = CheckListItem;
