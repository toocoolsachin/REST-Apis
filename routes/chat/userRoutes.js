const router = require('express').Router();
const { addUser, getUser } = require('../../controllers/chat/userController');

router.post('/', addUser);
router.get('/', getUser);

module.exports = router;
