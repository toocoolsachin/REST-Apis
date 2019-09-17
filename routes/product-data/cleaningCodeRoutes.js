const router = require('express').Router();

const {
  addCleaningCode,
  showCleaningCode,
  editCleaningCode,
  updateCleaningCode,
  deleteCleaningCode
} = require('../../controllers/product-data/cleaningCodeController');

router.post('/', addCleaningCode);
router.get('/', showCleaningCode);
router.get('/edit/:id', editCleaningCode);
router.post('/update/:id', updateCleaningCode);
router.delete('/delete/:id', deleteCleaningCode);

module.exports = router;
