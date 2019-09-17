const router = require('express').Router();

const {
  addRemovableCushion,
  showRemovableCushion,
  editRemovableCushion,
  updateRemovableCushion,
  deleteRemovableCushion
} = require('../../controllers/product-data/removableCushionController');

router.post('/', addRemovableCushion);
router.get('/', showRemovableCushion);
router.get('/edit/:id', editRemovableCushion);
router.post('/update/:id', updateRemovableCushion);
router.delete('/delete/:id', deleteRemovableCushion);

module.exports = router;
