const router = require('express').Router();
const {
  addVendor,
  showAllVendors,
  editVendor,
  updateVendor,
  deleteVendor
} = require('../../controllers/contacts/vendorController');

router.post('/', addVendor);
router.get('/', showAllVendors);
router.get('/edit/:id', editVendor);
router.post('/update/:id', updateVendor);
router.delete('/delete/:id', deleteVendor);

module.exports = router;
