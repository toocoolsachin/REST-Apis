const router = require('express').Router();

const {
  addCabinetType,
  showCabinetType,
  editCabinetType,
  updateCabinetType,
  deleteCabinetType
} = require('../../controllers/product-data/cabinetTypeController');

router.post('/', addCabinetType);
router.get('/', showCabinetType);
router.get('/edit/:id', editCabinetType);
router.post('/update/:id', updateCabinetType);
router.delete('/delete/:id', deleteCabinetType);

module.exports = router;
