const router = require('express').Router();

const {
  addTableMechanism,
  showTableMechanism,
  editTableMechanism,
  updateTableMechanism,
  deleteTableMechanism
} = require('../../controllers/product-data/tableMechanismController');

router.post('/', addTableMechanism);
router.get('/', showTableMechanism);
router.get('/edit/:id', editTableMechanism);
router.post('/update/:id', updateTableMechanism);
router.delete('/delete/:id', deleteTableMechanism);

module.exports = router;
