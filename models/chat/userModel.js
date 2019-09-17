const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  status: {
    type: String
  },
  mood: {
    type: String
  },
  chatList: {
    type: Array,
    default: [
      {
        chatId: {
          type: String
        },
        contactId: {
          type: String
        },
        lastMessageTime: {
          type: Date,
          default: Date.now()
        }
      }
    ]
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
