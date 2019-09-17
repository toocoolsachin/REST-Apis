const router = require('express').Router();
const {
  createPurchaseOrder,
  listPurchaseOrders,
  listPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder
} = require('../controllers/purchaseOrderController');

router.post('/', createPurchaseOrder);

router.get('/', listPurchaseOrders);

router.get('/edit/:id', listPurchaseOrder);

router.post('/update/:id', updatePurchaseOrder);

router.delete('/delete/:id', deletePurchaseOrder);

module.exports = router;
