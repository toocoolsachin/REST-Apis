const PurchaseOrder = require('./../models/purchaseOrderModel');

// Create product
exports.createPurchaseOrder = async (req, res) => {
  try {
    console.log(req.body);
    await PurchaseOrder.create({
      name: req.body.buyer,
      handle: req.body.handle,
      description: req.body.description,
      categories: req.body.categories,
      featuredImageId: req.body.featuredImageId,
      images: req.body.images,
      repeat_item: req.body.repeat_item,
      purchaseOrderNumber: req.body.purchaseOrderNumber,
      po_vendor: req.body.vendor,
      po_location: req.body.location,
      buyer: req.body.buyer,
      country: req.body.country,
      merchant: req.body.merchant,
      po_date: req.body.po_date,
      item: req.body.item,
      po_delivery_location: req.body.po_delivery_location,
      buyer_item_number: req.body.buyer_item_number,
      item_description: req.body.item_description,
      material: req.body.material,
      // material1: req.body.material1,
      // material2: req.body.material2,
      // material3: req.body.material3,
      // material4: req.body.material4,
      finish: req.body.finish,
      // finish1: req.body.finish1,
      // finish2: req.body.finish2,
      // finish3: req.body.finish3,
      // finish4: req.body.finish4,
      gloss_percent: req.body.gloss_percent,
      product_size: req.body.product_size,
      net_weight: req.body.net_weight,
      po_qty: req.body.po_qty,
      price: req.body.price,
      total_po_value: req.body.total_po_value,
      advance_amount_percent: req.body.advance_amount_percent,
      advance_received_date: req.body.advance_received_date,
      po_delivery_date: req.body.po_delivery_date,
      production_lead_time_days: req.body.production_lead_time,
      packing_details: req.body.packing_details,
      knock_down_or_assembly: req.body.knock_down,
      inner_carton_details: req.body.inner_carton,
      master_carton_details: req.body.master_carton,
      gross_weight: req.body.gross_weight,
      cbm: req.body.cbm,
      total_cbm: req.body.total_cbm,
      testings: req.body.testings,
      testing: req.body.testing,
      labeling_marking_barcodes_hangtags: req.body.labeling,
      spare_part_po_number: req.body.spare_part_po_number,
      counter_cad_detailed_spec: req.body.cad,
      finish_approved_sign_panel: req.body.finish_approved,
      photo_shoot_approval: req.body.photo_shoot_approval,
      ai_sheet_approval: req.body.ai_sheet_approval,
      remarks_sepcial_comments: req.body.remarks
    });
    res.status(200).send('PurchaseOrder created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all products
exports.listPurchaseOrders = async (req, res) => {
  try {
    const pos = await PurchaseOrder.find();
    res.status(200).json({
      status: 'success',
      results: pos.length,
      data: {
        pos
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit product
exports.listPurchaseOrder = async (req, res) => {
  try {
    const po = await PurchaseOrder.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        po
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update product
exports.updatePurchaseOrder = async (req, res) => {
  try {
    const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'Updated',
      data: {
        user: updatedPurchaseOrder
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete User
exports.deletePurchaseOrder = async (req, res) => {
  try {
    await PurchaseOrder.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
