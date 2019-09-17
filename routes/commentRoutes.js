const router = require('express').Router();
const {
  addComment,
  showComments,
  showComment,
  updateComment,
  deleteComment
} = require('../controllers/commentController');

router.post('/', addComment);
router.get('/', showComments);
router.get('/edit/:id', showComment);
router.post('/update/:id', updateComment);
router.delete('/delete/:id', deleteComment);

module.exports = router;
