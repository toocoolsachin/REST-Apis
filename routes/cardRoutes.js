const router = require('express').Router();
// const verifyToken = require('../verifyToken');
const {
  getAllCards,
  updateCard,
  deleteCard,
  getCard,
  createCard
} = require('../controllers/cardController');
// const { restrictTo } = require('../controllers/authController');

// Create card
router.post('/', createCard);

// Get all cards
router.get('/', getAllCards);

// Select a card to edit
router.get('/edit/:id', getCard);

// rename card
router.patch('/update/:id', updateCard);

// Delete card
router.delete('/delete/:id', deleteCard);

module.exports = router;
