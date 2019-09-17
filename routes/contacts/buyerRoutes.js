const router = require('express').Router();
const {
  addBuyer,
  showAllBuyers,
  editBuyer,
  updateBuyer,
  deleteBuyer
} = require('../../controllers/contacts/buyerController');

router.post('/', addBuyer);
router.get('/', showAllBuyers);
router.get('/edit/:id', editBuyer);
router.post('/update/:id', updateBuyer);
router.delete('/delete/:id', deleteBuyer);

module.exports = router;
