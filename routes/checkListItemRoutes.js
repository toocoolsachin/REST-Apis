const router = require('express').Router();
const {
  createCheckListItem,
  getAllCheckListItems,
  getCheckListItem,
  updateCheckListItem,
  deleteCheckListItem
} = require('../controllers/checkListItemController');

router.post('/', createCheckListItem);
router.get('/', getAllCheckListItems);
router.get('/edit/:id', getCheckListItem);
router.post('/update/:id', updateCheckListItem);
router.delete('/delete/:id', deleteCheckListItem);

module.exports = router;
