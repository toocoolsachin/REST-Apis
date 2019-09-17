const router = require('express').Router();

const {
  addUpholsteryFill,
  showUpholsteryFill,
  editUpholsteryFill,
  updateUpholsteryFill,
  deleteUpholsteryFill
} = require('../../controllers/product-data/upholsteryFillController');

router.post('/', addUpholsteryFill);
router.get('/', showUpholsteryFill);
router.get('/edit/:id', editUpholsteryFill);
router.post('/update/:id', updateUpholsteryFill);
router.delete('/delete/:id', deleteUpholsteryFill);

module.exports = router;
