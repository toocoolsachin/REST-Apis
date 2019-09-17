const router = require('express').Router();
// const verifyToken = require('../verifyToken');
const {
  getAllBoards,
  updateBoard,
  deleteBoard,
  getBoard,
  createBoard
} = require('../controllers/boardController');
// const { restrictTo } = require('../controllers/authController');

// Create board
router.post('/', createBoard);

// Get all Boards
router.get('/', getAllBoards);

// Edit the details of board
router.get('/edit/:id', getBoard);

// Update board
router.patch('/update/:id', updateBoard);

// Delete board
router.delete('/delete/:id', deleteBoard);

module.exports = router;
