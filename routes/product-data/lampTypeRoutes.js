const router = require('express').Router();

const {
  addLampType,
  showLampType,
  editLampType,
  updateLampType,
  deleteLampType
} = require('../../controllers/product-data/lampTypeController');

router.post('/', addLampType);
router.get('/', showLampType);
router.get('/edit/:id', editLampType);
router.post('/update/:id', updateLampType);
router.delete('/delete/:id', deleteLampType);

module.exports = router;
