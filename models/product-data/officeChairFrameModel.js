const mongoose = require('mongoose');

const officeChairFrameSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const OfficeChairFrame = mongoose.model('OfficeChairFrame', officeChairFrameSchema);
module.exports = OfficeChairFrame;
