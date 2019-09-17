const router = require('express').Router();

const {
  addHardwareMaterial,
  showHardwareMaterial,
  editHardwareMaterial,
  updateHardwareMaterial,
  deleteHardwareMaterial
} = require('../../controllers/product-data/hardwareMaterialController');

router.post('/', addHardwareMaterial);
router.get('/', showHardwareMaterial);
router.get('/edit/:id', editHardwareMaterial);
router.post('/update/:id', updateHardwareMaterial);
router.delete('/delete/:id', deleteHardwareMaterial);

module.exports = router;
