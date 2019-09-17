const router = require('express').Router();

const {
  addLedType,
  showLedType,
  editLedType,
  updateLedType,
  deleteLedType
} = require('../../controllers/product-data/ledTypeController');

router.post('/', addLedType);
router.get('/', showLedType);
router.get('/edit/:id', editLedType);
router.post('/update/:id', updateLedType);
router.delete('/delete/:id', deleteLedType);

module.exports = router;
