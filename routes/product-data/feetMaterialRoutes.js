const router = require('express').Router();

const {
  addFeetMaterial,
  showFeetMaterials,
  editFeetMaterial,
  updateFeetMaterial,
  deleteFeetMaterial
} = require('../../controllers/product-data/feetMaterialController');

router.post('/', addFeetMaterial);
router.get('/', showFeetMaterials);
router.get('/edit/:id', editFeetMaterial);
router.post('/update/:id', updateFeetMaterial);
router.delete('/delete/:id', deleteFeetMaterial);

module.exports = router;
