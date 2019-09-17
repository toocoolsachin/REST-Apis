const router = require('express').Router();

const {
  addFrameMaterial,
  showFrameMaterials,
  editFrameMaterial,
  updateFrameMaterial,
  deleteFrameMaterial
} = require('../../controllers/product-data/frameMaterialController');

router.post('/', addFrameMaterial);
router.get('/', showFrameMaterials);
router.get('/edit/:id', editFrameMaterial);
router.post('/update/:id', updateFrameMaterial);
router.delete('/delete/:id', deleteFrameMaterial);

module.exports = router;
