const router = require('express').Router();

const {
  addPaintingMainMaterial,
  showPaintingMainMaterial,
  editPaintingMainMaterial,
  updatePaintingMainMaterial,
  deletePaintingMainMaterial
} = require('../../controllers/product-data/paintingMainMaterialController');

router.post('/', addPaintingMainMaterial);
router.get('/', showPaintingMainMaterial);
router.get('/edit/:id', editPaintingMainMaterial);
router.post('/update/:id', updatePaintingMainMaterial);
router.delete('/delete/:id', deletePaintingMainMaterial);

module.exports = router;
