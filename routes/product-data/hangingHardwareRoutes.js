const router = require('express').Router();

const {
  addHangingHardware,
  showHangingHardware,
  editHangingHardware,
  updateHangingHardware,
  deleteHangingHardware
} = require('../../controllers/product-data/hangingHardwareController');

router.post('/', addHangingHardware);
router.get('/', showHangingHardware);
router.get('/edit/:id', editHangingHardware);
router.post('/update/:id', updateHangingHardware);
router.delete('/delete/:id', deleteHangingHardware);

module.exports = router;
