const router = require('express').Router();

const {
  addMirrorType,
  showMirrorType,
  editMirrorType,
  updateMirrorType,
  deleteMirrorType
} = require('../../controllers/product-data/mirrorTypeController');

router.post('/', addMirrorType);
router.get('/', showMirrorType);
router.get('/edit/:id', editMirrorType);
router.post('/update/:id', updateMirrorType);
router.delete('/delete/:id', deleteMirrorType);

module.exports = router;
