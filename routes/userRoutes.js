const router = require('express').Router();
const verifyToken = require('../verifyToken');
const {
  getAllUsers,
  updateUser,
  deleteUser,
  getUser
} = require('../controllers/userController');

// Get all Users
router.get('/', getAllUsers);

// Edit the details of user
router.get('/edit/:id', verifyToken, getUser);

// Update User
router.patch('/update/:id', verifyToken, updateUser);

// Delete User
router.delete('/delete/:id', verifyToken, deleteUser);

module.exports = router;
