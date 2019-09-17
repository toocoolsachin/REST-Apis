const router = require('express').Router();

const {
  addPaintType,
  showPaintType,
  editPaintType,
  updatePaintType,
  deletePaintType
} = require('../../controllers/product-data/paintTypeController');

router.post('/', addPaintType);
router.get('/', showPaintType);
router.get('/edit/:id', editPaintType);
router.post('/update/:id', updatePaintType);
router.delete('/delete/:id', deletePaintType);

module.exports = router;
