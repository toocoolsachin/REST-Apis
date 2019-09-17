const router = require('express').Router();
const {
  addChat,
  fetchChats,
  getChat
} = require('../../controllers/chat/chatController');

router.post('/', addChat);
router.get('/', fetchChats);
router.get('/get-chat/:userId/:contactId', getChat);

module.exports = router;
