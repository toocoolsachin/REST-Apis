const router = require('express').Router();
const {
  addBedSize,
  showBedSize,
  editBedSize,
  updateBedSize,
  deleteBedSize
} = require('../../controllers/product-data/bedSizeController');

router.post('/', addBedSize);
router.get('/', showBedSize);
router.get('/edit/:id', editBedSize);
router.post('/update/:id', updateBedSize);
router.delete('/delete/:id', deleteBedSize);

module.exports = router;

