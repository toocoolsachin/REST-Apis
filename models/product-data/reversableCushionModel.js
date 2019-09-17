const mongoose = require('mongoose');

const reversableCushionSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const ReversableCushion = mongoose.model('ReversableCushion', reversableCushionSchema);
module.exports = ReversableCushion;
