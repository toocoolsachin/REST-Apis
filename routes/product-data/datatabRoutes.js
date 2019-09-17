const router = require('express').Router();

const {
  addDataTab,
  showDataTab,
  editDataTab,
  updateDataTab,
  deleteDataTab
} = require('../../controllers/product-data/datatabController');

router.post('/', addDataTab);
router.get('/', showDataTab);
router.get('/edit/:id', editDataTab);
router.post('/update/:id', updateDataTab);
router.delete('/delete/:id', deleteDataTab);

module.exports = router;
