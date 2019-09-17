const router = require('express').Router();
const {
  createProductSpecification,
  listProductSpecifications,
  listProductSpecification,
  updateProductSpecification,
  deleteProductSpecification
} = require('../controllers/productSpecificationController');

router.post('/', createProductSpecification);

router.get('/', listProductSpecifications);

router.get('/edit/:id', listProductSpecification);

router.post('/update/:id', updateProductSpecification);

router.delete('/delete/:id', deleteProductSpecification);

module.exports = router;
