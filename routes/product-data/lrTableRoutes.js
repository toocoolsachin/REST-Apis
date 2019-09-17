const router = require('express').Router();

const {
  addLrTable,
  showLrTable,
  editLrTable,
  updateLrTable,
  deleteLrTable
} = require('../../controllers/product-data/lrTableController');

router.post('/', addLrTable);
router.get('/', showLrTable);
router.get('/edit/:id', editLrTable);
router.post('/update/:id', updateLrTable);
router.delete('/delete/:id', deleteLrTable);

module.exports = router;
