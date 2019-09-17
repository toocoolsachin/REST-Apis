const router = require('express').Router();

const {
  addClosure,
  showClosure,
  editClosure,
  updateClosure,
  deleteClosure
} = require('../../controllers/product-data/closureController');

router.post('/', addClosure);
router.get('/', showClosure);
router.get('/edit/:id', editClosure);
router.post('/update/:id', updateClosure);
router.delete('/delete/:id', deleteClosure);

module.exports = router;
