const router = require('express').Router();
const {
  addAssemblyLevel,
  showAssemblyLevel,
  editAssemblyLevel,
  updateAssemblyLevel,
  deleteAssemblyLevel
} = require('../../controllers/product-data/assemblyLevelController');

router.post('/', addAssemblyLevel);
router.get('/', showAssemblyLevel);
router.get('/edit/:id', editAssemblyLevel);
router.post('/update/:id', updateAssemblyLevel);
router.delete('/delete/:id', deleteAssemblyLevel);

module.exports = router;

