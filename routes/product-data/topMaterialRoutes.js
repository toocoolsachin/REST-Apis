const router = require('express').Router();

const {
  addTopMaterial,
  showTopMaterial,
  editTopMaterial,
  updateTopMaterial,
  deleteTopMaterial
} = require('../../controllers/product-data/topMaterialController');

router.post('/', addTopMaterial);
router.get('/', showTopMaterial);
router.get('/edit/:id', editTopMaterial);
router.post('/update/:id', updateTopMaterial);
router.delete('/delete/:id', deleteTopMaterial);

module.exports = router;
