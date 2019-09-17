const router = require('express').Router();

const {
  addOfficeChairFrame,
  showOfficeChairFrame,
  editOfficeChairFrame,
  updateOfficeChairFrame,
  deleteOfficeChairFrame
} = require('../../controllers/product-data/officeChairFrameController');

router.post('/', addOfficeChairFrame);
router.get('/', showOfficeChairFrame);
router.get('/edit/:id', editOfficeChairFrame);
router.post('/update/:id', updateOfficeChairFrame);
router.delete('/delete/:id', deleteOfficeChairFrame);

module.exports = router;
