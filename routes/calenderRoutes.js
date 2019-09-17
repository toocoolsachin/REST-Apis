const router = require('express').Router();
const {
  addEvent,
  showEvent,
  editEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/calenderController');

router.post('/', addEvent);
router.get('/', showEvent);
router.get('/edit/:id', editEvent);
router.post('/update/:id', updateEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;
