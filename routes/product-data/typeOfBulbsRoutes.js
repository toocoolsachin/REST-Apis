const router = require('express').Router();

const {
  addTypeOfBulb,
  showTypeOfBulb,
  editTypeOfBulb,
  updateTypeOfBulb,
  deleteTypeOfBulb
} = require('../../controllers/product-data/typeOfBulbsController');

router.post('/', addTypeOfBulb);
router.get('/', showTypeOfBulb);
router.get('/edit/:id', editTypeOfBulb);
router.post('/update/:id', updateTypeOfBulb);
router.delete('/delete/:id', deleteTypeOfBulb);

module.exports = router;
