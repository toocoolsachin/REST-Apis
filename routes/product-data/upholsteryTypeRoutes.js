const router = require('express').Router();

const {
  addUpholsteryType,
  showUpholsteryType,
  editUpholsteryType,
  updateUpholsteryType,
  deleteUpholsteryType
} = require('../../controllers/product-data/upholsteryTypeController');

router.post('/', addUpholsteryType);
router.get('/', showUpholsteryType);
router.get('/edit/:id', editUpholsteryType);
router.post('/update/:id', updateUpholsteryType);
router.delete('/delete/:id', deleteUpholsteryType);

module.exports = router;
