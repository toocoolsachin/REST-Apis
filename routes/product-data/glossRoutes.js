const router = require('express').Router();

const {
  addGloss,
  showGloss,
  editGloss,
  updateGloss,
  deleteGloss
} = require('../../controllers/product-data/glossController');

router.post('/', addGloss);
router.get('/', showGloss);
router.get('/edit/:id', editGloss);
router.post('/update/:id', updateGloss);
router.delete('/delete/:id', deleteGloss);

module.exports = router;
