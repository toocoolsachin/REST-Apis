const router = require('express').Router();
const {
  addQC,
  showAllQCs,
  editQC,
  updateQC,
  deleteQC
} = require('../../controllers/contacts/qcController');

router.post('/', addQC);
router.get('/', showAllQCs);
router.get('/edit/:id', editQC);
router.post('/update/:id', updateQC);
router.delete('/delete/:id', deleteQC);

module.exports = router;
