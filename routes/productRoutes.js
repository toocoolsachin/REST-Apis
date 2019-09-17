const router = require('express').Router();
const {
  createProduct,
  listProducts,
  listProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.post('/', createProduct);

router.get('/', listProducts);

router.get('/edit/:id', listProduct);

router.post('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;
