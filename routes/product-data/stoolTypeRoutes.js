const router = require('express').Router();

const {
  addStoolType,
  showStoolType,
  editStoolType,
  updateStoolType,
  deleteStoolType
} = require('../../controllers/product-data/stoolTypeController');

router.post('/', addStoolType);
router.get('/', showStoolType);
router.get('/edit/:id', editStoolType);
router.post('/update/:id', updateStoolType);
router.delete('/delete/:id', deleteStoolType);

module.exports = router;
