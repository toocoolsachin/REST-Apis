const router = require('express').Router();

const {
  addEtcType,
  showEtcTypes,
  editEtcType,
  updateEtcType,
  deleteEtcType
} = require('../../controllers/product-data/etcTypeController');

router.post('/', addEtcType);
router.get('/', showEtcTypes);
router.get('/edit/:id', editEtcType);
router.post('/update/:id', updateEtcType);
router.delete('/delete/:id', deleteEtcType);

module.exports = router;
