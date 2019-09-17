const router = require('express').Router();
const {
  addMerchandiser,
  showAllMerchandisers,
  editMerchandiser,
  updateMerchandiser,
  deleteMerchandiser
} = require('../../controllers/contacts/merchandiserController');

router.post('/', addMerchandiser);
router.get('/', showAllMerchandisers);
router.get('/edit/:id', editMerchandiser);
router.post('/update/:id', updateMerchandiser);
router.delete('/delete/:id', deleteMerchandiser);

module.exports = router;
