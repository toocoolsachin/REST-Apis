const mongoose = require('mongoose');

const closureSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Closure = mongoose.model('Closure', closureSchema);
module.exports = Closure;
