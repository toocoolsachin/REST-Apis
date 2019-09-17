const router = require('express').Router();

const {
  addDrawerGlides,
  showDrawerGlides,
  editDrawerGlides,
  updateDrawerGlides,
  deleteDrawerGlides
} = require('../../controllers/product-data/drawerGlidesController');

router.post('/', addDrawerGlides);
router.get('/', showDrawerGlides);
router.get('/edit/:id', editDrawerGlides);
router.post('/update/:id', updateDrawerGlides);
router.delete('/delete/:id', deleteDrawerGlides);

module.exports = router;
