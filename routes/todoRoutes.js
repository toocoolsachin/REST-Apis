const router = require('express').Router();
const {
  addTodo,
  showTodos,
  editTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

router.post('/', addTodo);
router.get('/', showTodos);
router.get('/edit/:id', editTodo);
router.post('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
