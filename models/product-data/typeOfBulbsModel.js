const mongoose = require('mongoose');

const typeOfBulbsSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const TypeOfBulbs = mongoose.model('TypeOfBulbs', typeOfBulbsSchema);
module.exports = TypeOfBulbs;
