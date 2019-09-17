const User = require('../../models/chat/userModel');

exports.addUser = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      avatar: req.body.avatar,
      status: req.body.status,
      mood: req.body.mood,
      chatList: req.body.chatList
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
