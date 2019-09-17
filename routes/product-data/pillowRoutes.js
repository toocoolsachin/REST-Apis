const router = require('express').Router();

const {
  addPillow,
  showPillow,
  editPillow,
  updatePillow,
  deletePillow
} = require('../../controllers/product-data/pillowController');

router.post('/', addPillow);
router.get('/', showPillow);
router.get('/edit/:id', editPillow);
router.post('/update/:id', updatePillow);
router.delete('/delete/:id', deletePillow);

module.exports = router;
