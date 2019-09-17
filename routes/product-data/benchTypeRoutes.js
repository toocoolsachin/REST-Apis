const router = require('express').Router();

const {
  addBenchType,
  showBenchType,
  editBenchType,
  updateBenchType,
  deleteBenchType
} = require('../../controllers/product-data/benchTypeController');

router.post('/', addBenchType);
router.get('/', showBenchType);
router.get('/edit/:id', editBenchType);
router.post('/update/:id', updateBenchType);
router.delete('/delete/:id', deleteBenchType);

module.exports = router;
