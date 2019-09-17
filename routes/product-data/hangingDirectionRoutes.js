const router = require('express').Router();

const {
  addHangingDirection,
  showHangingDirection,
  editHangingDirection,
  updateHangingDirection,
  deleteHangingDirection
} = require('../../controllers/product-data/hangingDirectionController');

router.post('/', addHangingDirection);
router.get('/', showHangingDirection);
router.get('/edit/:id', editHangingDirection);
router.post('/update/:id', updateHangingDirection);
router.delete('/delete/:id', deleteHangingDirection);

module.exports = router;
