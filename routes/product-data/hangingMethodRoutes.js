const router = require('express').Router();

const {
  addHangingMethod,
  showHangingMethod,
  editHangingMethod,
  updateHangingMethod,
  deleteHangingMethod
} = require('../../controllers/product-data/hangingMethodController');

router.post('/', addHangingMethod);
router.get('/', showHangingMethod);
router.get('/edit/:id', editHangingMethod);
router.post('/update/:id', updateHangingMethod);
router.delete('/delete/:id', deleteHangingMethod);

module.exports = router;
