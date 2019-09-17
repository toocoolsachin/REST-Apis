const mongoose = require('mongoose');

const calenderSchema = new mongoose.Schema({
  title: {
    type: String
  },
  allday: {
    type: Boolean
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  desc: {
    type: String
  }
});

const Calender = mongoose.model('Calender', calenderSchema);
module.exports = Calender;
