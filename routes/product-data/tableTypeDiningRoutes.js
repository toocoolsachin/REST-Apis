const router = require('express').Router();

const {
  addTableTypeDining,
  showTableTypeDining,
  editTableTypeDining,
  updateTableTypeDining,
  deleteTableTypeDining
} = require('../../controllers/product-data/tableTypeDiningController');

router.post('/', addTableTypeDining);
router.get('/', showTableTypeDining);
router.get('/edit/:id', editTableTypeDining);
router.post('/update/:id', updateTableTypeDining);
router.delete('/delete/:id', deleteTableTypeDining);

module.exports = router;
