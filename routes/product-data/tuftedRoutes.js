const router = require('express').Router();

const {
  addTufted,
  showTufted,
  editTufted,
  updateTufted,
  deleteTufted
} = require('../../controllers/product-data/tuftedController');

router.post('/', addTufted);
router.get('/', showTufted);
router.get('/edit/:id', editTufted);
router.post('/update/:id', updateTufted);
router.delete('/delete/:id', deleteTufted);

module.exports = router;
