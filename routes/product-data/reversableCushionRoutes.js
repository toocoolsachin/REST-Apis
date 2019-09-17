const router = require('express').Router();

const {
  addReversableCushion,
  showReversableCushion,
  editReversableCushion,
  updateReversableCushion,
  deleteReversableCushion
} = require('../../controllers/product-data/reversableCushionController');

router.post('/', addReversableCushion);
router.get('/', showReversableCushion);
router.get('/edit/:id', editReversableCushion);
router.post('/update/:id', updateReversableCushion);
router.delete('/delete/:id', deleteReversableCushion);

module.exports = router;
