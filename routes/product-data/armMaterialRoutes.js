const router = require('express').Router();
const {
  addArmMaterial,
  showArmMaterial,
  editArmMaterial,
  updateArmMaterial,
  deleteArmMaterial
} = require('../../controllers/product-data/armMaterialController');

router.post('/', addArmMaterial);
router.get('/', showArmMaterial);
router.get('/edit/:id', editArmMaterial);
router.post('/update/:id', updateArmMaterial);
router.delete('/delete/:id', deleteArmMaterial);

module.exports = router;
