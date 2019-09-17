const router = require('express').Router();

const {
  addSectionalType,
  showSectionalType,
  editSectionalType,
  updateSectionalType,
  deleteSectionalType
} = require('../../controllers/product-data/sectionalTypeController');

router.post('/', addSectionalType);
router.get('/', showSectionalType);
router.get('/edit/:id', editSectionalType);
router.post('/update/:id', updateSectionalType);
router.delete('/delete/:id', deleteSectionalType);

module.exports = router;
