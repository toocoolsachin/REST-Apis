const router = require('express').Router();

const {
  addBedStorageType,
  showBedStorageType,
  editBedStorageType,
  updateBedStorageType,
  deleteBedStorageType
} = require('../../controllers/product-data/bedStorageTypeController');

router.post('/', addBedStorageType);
router.get('/', showBedStorageType);
router.get('/edit/:id', editBedStorageType);
router.post('/update/:id', updateBedStorageType);
router.delete('/delete/:id', deleteBedStorageType);

module.exports = router;
