const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  idMember: {
    type: String
  },
  message: {
    type: String
  },
  time: {
    type: Date
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
