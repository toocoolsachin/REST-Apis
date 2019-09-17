const mongoose = require('mongoose');

const chatContactSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  status: String,
  mood: String,
  unread: String
});

const ChatContact = mongoose.model('ChatContact', chatContactSchema);
module.exports = ChatContact;
