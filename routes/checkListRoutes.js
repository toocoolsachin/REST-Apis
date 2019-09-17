const router = require('express').Router();
const {
  createCheckList,
  getAllCheckLists,
  getCheckList,
  updateCheckList,
  deleteCheckList
} = require('../controllers/checkListController');

router.post('/', createCheckList);
router.get('/', getAllCheckLists);
router.get('/edit/:id', getCheckList);
router.post('/update/:id', updateCheckList);
router.delete('/delete/:id', deleteCheckList);

module.exports = router;
