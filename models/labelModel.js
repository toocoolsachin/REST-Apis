const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema({
  labelName: {
    type: String
  },
  class: {
    type: String
  }
});

const Label = mongoose.model('Label', labelSchema);
module.exports = Label;
