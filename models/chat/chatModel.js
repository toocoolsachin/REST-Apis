const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  dialog: {
    type: Array,
    default: [
      {
        who: String,
        message: String,
        time: { type: Date, default: Date.now() }
      }
    ]
  }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
