const router = require('express').Router();

const {
  addSeatMaterial,
  showSeatMaterial,
  editSeatMaterial,
  updateSeatMaterial,
  deleteSeatMaterial
} = require('../../controllers/product-data/seatMaterialController');

router.post('/', addSeatMaterial);
router.get('/', showSeatMaterial);
router.get('/edit/:id', editSeatMaterial);
router.post('/update/:id', updateSeatMaterial);
router.delete('/delete/:id', deleteSeatMaterial);

module.exports = router;
