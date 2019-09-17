const router = require('express').Router();
const {
  addLabel,
  getLabel,
  getLabels,
  updateLabel,
  deleteLabel
} = require('../controllers/labelController');

router.post('/', addLabel);
router.get('/', getLabels);
router.get('/edit/:id', getLabel);
router.post('/update/:id', updateLabel);
router.delete('/delete/:id', deleteLabel);

module.exports = router;
