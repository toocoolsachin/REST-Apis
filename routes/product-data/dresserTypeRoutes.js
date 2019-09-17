const router = require('express').Router();

const {
  addDresserType,
  showDresserTypes,
  editDresserType,
  updateDresserType,
  deleteDresserType
} = require('../../controllers/product-data/dresserTypeController');

router.post('/', addDresserType);
router.get('/', showDresserTypes);
router.get('/edit/:id', editDresserType);
router.post('/update/:id', updateDresserType);
router.delete('/delete/:id', deleteDresserType);

module.exports = router;
