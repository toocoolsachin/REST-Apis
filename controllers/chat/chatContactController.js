const ChatContact = require('../../models/chat/chatContactModel');

exports.addContact = async (req, res) => {
  try {
    await ChatContact.create({
      name: req.body.name,
      avatar: req.body.avatar,
      status: req.body.status,
      mood: req.body.mood,
      unread: req.body.unread
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getContacts = async (req, res) => {
  try {
    const chatcontacts = await ChatContact.find({});
    res.status(200).json({
      status: 'success',
      data: {
        chatcontacts
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
