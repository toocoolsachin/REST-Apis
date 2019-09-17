const router = require('express').Router();

const {
  addMainMaterial,
  showMainMaterial,
  editMainMaterial,
  updateMainMaterial,
  deleteMainMaterial
} = require('../../controllers/product-data/mainMaterialController');

router.post('/', addMainMaterial);
router.get('/', showMainMaterial);
router.get('/edit/:id', editMainMaterial);
router.post('/update/:id', updateMainMaterial);
router.delete('/delete/:id', deleteMainMaterial);

module.exports = router;
