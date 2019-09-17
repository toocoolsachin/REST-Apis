const mongoose = require('mongoose');

const drawerGlideMechanismSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const DrawerGlideMechanism = mongoose.model('DrawerGlideMechanism', drawerGlideMechanismSchema);
module.exports = DrawerGlideMechanism;
