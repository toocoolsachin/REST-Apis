const router = require('express').Router();
const {
  addArmType,
  showArmType,
  editArmType,
  updateArmType,
  deleteArmType
} = require('../../controllers/product-data/armTypeController');

router.post('/', addArmType);
router.get('/', showArmType);
router.get('/edit/:id', editArmType);
router.post('/update/:id', updateArmType);
router.delete('/delete/:id', deleteArmType);

module.exports = router;
