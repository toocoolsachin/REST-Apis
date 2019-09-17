const Chat = require('../../models/chat/chatModel');
const ChatContact = require('../../models/chat/chatContactModel');
const User = require('../../models/chat/userModel');

exports.addChat = async (req, res) => {
  try {
    await Chat.create({
      dialog: req.body.dialog
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.fetchChats = async (req, res) => {
  try {
    const chats = await Chat.find({});

    res.status(200).json({
      status: 'success',
      data: {
        chats
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getChat = async (req, res) => {
  try {
    // console.log(req.query.id); // console.log(req.query);
    var user = await User.findById(req.params.userId);
    var contact = await ChatContact.findById(req.params.contactId);
    // const chatId = await Chat.findById(req.params.id);

    var userId = user._id;
    var contactId = contact._id;

    console.log(`userId: ${userId}`);
    console.log(`contactId: ${contactId}`);

    const user1 = await User.find(_id => _id === userId);
    console.log(`user1: ${user1}`);
    console.log(`name: ${user1[0].name}`);
    console.log(`user1Id: ${user1[0]._id}`);
    // console.log(`chatListLength: ${user1[0].chatList.length}`);

    // const chat = await user1[0].chatList.find(_id => _id.contactId === contactId);
    // console.log(`chat: ${chat}`);

    for (var i = 0; i < user1[0].chatList.length; i++) {
      console.log(`contactId: ${user1[0].chatList[i].contactId}`);
      if (contactId == user1[0].chatList[i].contactId) {
        const chatId = user1[0].chatList[i].chatId;
        console.log(`chatId: ${chatId}`);
        let response = await Chat.find(_id => _id === chatId);
        res.status(200).json({
          status: 'success',
          data: {
            response
          }
        });
      }
    }
    // console.log(`chat: ${chat}`);
    // const chatId = chat ? chat.chatId : createNewChat(contactId, userId);
    // console.log(`chatId: ${chatId}`);
    // let response = Chat.find(_id => _id === chatId);
    // console.log(`response: ${response}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

function createNewChat(contactId, userId) {
  const user = User.find(_id => _id === userId);
  let chatId = Chat.find(_id => _id === chatId);
  user.chatList = [
    {
      chatId: chatId,
      contactId: contactId,
      lastMessageTime: ''
    },
    ...user[0].chatList
  ];
  chats = [
    ...chats,
    {
      id: chatId,
      dialog: []
    }
  ];
  return chatId;
}

// exports.createNewChat = async (req, res) => {
//   const userId = await User.findById(req.params.id);
//   console.log(userId);
//   const contactId = await ChatContact.findById(req.params.id);
// };
