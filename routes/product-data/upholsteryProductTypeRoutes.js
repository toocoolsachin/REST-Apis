const router = require('express').Router();

const {
  addUpholsteryProductType,
  showUpholsteryProductType,
  editUpholsteryProductType,
  updateUpholsteryProductType,
  deleteUpholsteryProductType
} = require('../../controllers/product-data/upholsteryProductTypeController');

router.post('/', addUpholsteryProductType);
router.get('/', showUpholsteryProductType);
router.get('/edit/:id', editUpholsteryProductType);
router.post('/update/:id', updateUpholsteryProductType);
router.delete('/delete/:id', deleteUpholsteryProductType);

module.exports = router;
