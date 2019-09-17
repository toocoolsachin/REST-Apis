const router = require('express').Router();
const { addContact, getContacts } = require('../../controllers/chat/chatContactController');

router.post('/', addContact);
router.get('/', getContacts);

module.exports = router;
