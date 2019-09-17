const router = require('express').Router();
// const verifyToken = require('../verifyToken');
const {
  getAllLists,
  updateList,
  deleteList,
  getList,
  createList
} = require('../controllers/listController');
// const { restrictTo } = require('../controllers/authController');

// Create List
router.post('/', createList);

// Get all Lists
router.get('/', getAllLists);

// Select a list to edit
router.get('/edit/:id', getList);

// rename list
router.patch('/update/:id', updateList);

// Delete list
router.delete('/delete/:id', deleteList);

module.exports = router;
