const mongoose = require('mongoose');

const productSpecificationSchema = new mongoose.Schema({
  mpd: {
    productimage: { type: String },
    supplieritem: { type: String },
    suppliermaterialcode: { type: String },
    cost: { type: String },
    moq: { type: String },
    cbmofmasterctn: { type: String },
    cartonsperitem: { type: String },
    itemspercarton: { type: String }
  },
  materials_color: {
    material: { type: String },
    color: { type: String }
  },
  pdw: {
    width: { type: String },
    depth: { type: String },
    height: { type: String },
    weight: { type: String },
    fourthdimension: { type: String }
  },

  reg_compliance: {
    complianttb1172013: { type: String },
    californiaregistraion: { type: String },
    tssaregistration: { type: String },
    quebecregistration: { type: String }
  },
  reg_warranty: {
    tscacarbcompliant: { type: String },
    proposition65compliance: { type: String },
    proposition65chemical: { type: String },
    warranty: { type: String },
    warrantyforcommercialuse: { type: String },
    countryofmanufacture: { type: String }
  }
});

const ProductSpecification = mongoose.model(
  'ProductSpecification',
  productSpecificationSchema
);
module.exports = ProductSpecification;
