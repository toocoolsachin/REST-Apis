const router = require('express').Router();
const {
  addarmAdjType,
  showArmAdjTypes,
  editArmAdjType,
  updateArmAdjType,
  deleteArmAdjType
} = require('../../controllers/product-data/armAdjTypeController');

router.post('/', addarmAdjType);
router.get('/', showArmAdjTypes);
router.get('/edit/:id', editArmAdjType);
router.post('/update/:id', updateArmAdjType);
router.delete('/delete/:id', deleteArmAdjType);

module.exports = router;
