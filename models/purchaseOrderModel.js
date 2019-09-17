const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  name: String,
  handle: String,
  description: String,
  categories: String,
  featuredImageId: String,
  images: [
    {
      id: String,
      url: String,
      type: String
    }
  ],
  purchaseOrderNumber: String,
  po_vendor: String,
  po_location: String,
  buyer: String,
  country: String,
  merchant: String,
  po_date: String,
  item: String,
  po_delivery_location: String,
  buyer_item_number: String,
  item_description: String,
  material: {
    material1: String,
    material2: String,
    material3: String,
    material4: String
  },
  finish: {
    finish1: String,
    finish2: String,
    finish3: String,
    finish4: String
  },
  gloss_percent: String,
  product_size: {
    dia: String,
    length: String,
    width: String,
    height: String
  },
  net_weight: String,
  po_qty: String,
  price: String,
  total_po_value: String,
  advance_amount_percent: String,
  advance_received_date: String,
  po_delivery_date: String,
  production_lead_time_days: String,
  packing_details: {
    item_pack: String,
    inner: String,
    master: String,
    packing_standards: String
  },
  knock_down_or_assembly: String,
  inner_carton_details: {
    length: String,
    width: String,
    height: String
  },
  master_carton_details: {
    length: String,
    width: String,
    height: String
  },
  gross_weight: String,
  cbm: String,
  total_cbm: String,
  testing: {
    product: String,
    finish: String,
    packing: String
  },
  labeling_marking_barcodes_hangtags: {
    product: String,
    inner: String,
    master: String,
    other_labels: String
  },
  spare_part_po_number: String,
  counter_cad_detailed_spec: String,
  finish_approved_sign_panel: String,
  photo_shoot_approval: String,
  ai_sheet_approval: String,
  remarks_sepcial_comments: String
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);
module.exports = PurchaseOrder;
