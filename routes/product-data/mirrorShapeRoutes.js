const router = require('express').Router();

const {
  addMirrorShape,
  showMirrorShape,
  editMirrorShape,
  updateMirrorShape,
  deleteMirrorShape
} = require('../../controllers/product-data/mirrorShapeController');

router.post('/', addMirrorShape);
router.get('/', showMirrorShape);
router.get('/edit/:id', editMirrorShape);
router.post('/update/:id', updateMirrorShape);
router.delete('/delete/:id', deleteMirrorShape);

module.exports = router;
