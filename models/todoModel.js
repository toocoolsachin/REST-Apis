const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  notes: {
    type: String
  },
  startDate: {
    type: Date
  },
  dueDate: {
    type: Date
  },
  completed: {
    type: Boolean
  },
  starred: {
    type: Boolean
  },
  important: {
    type: Boolean
  },
  deleted: {
    type: Boolean
  },
  labels: {
    type: Array
  },
  poNumber: {
    type: String
  },
  buyers: {
    type: String
  }
});

const Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos;
