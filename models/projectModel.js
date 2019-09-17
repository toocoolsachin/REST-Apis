var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
  title: {
    type: String
    // required:true
  },
  image: {
    type: String
    // required:true
  },
  document: {
    type: String
    // required:true
  },
  due: {
    type: Date
  },
  description: {
    type: String
  },
  vendor: {
    type: Array
  }
});
module.exports = mongoose.model('project', itemSchema);
