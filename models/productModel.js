const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  itemNumber: {
    type: String
  },
  productName: {
    type: String
  },
  productType: {
    type: String
  },
  mainMaterial: {
    type: String
  },
  mainMaterialVariety: {
    type: String
  },
  frameMaterial: {
    type: String
  },
  frameMaterialVariety: {
    type: String
  },
  compositeWoodProduct: {
    type: String
  },
  recycledContent: {
    type: String
  },
  reclaimedWood: {
    type: String
  },
  woodFinish: {
    type: String
  },
  glossLevel: {
    type: String
  },
  distressedFinish: {
    type: String
  },
  hardwareMaterial: {
    type: String
  },
  hardwareFinish: {
    type: String
  },
  includeCasters: {
    type: String
  },
  topMaterial: {
    type: String
  },
  topMaterialDetails: {
    type: String
  },
  topThickness: {
    type: String
  },
  drawerCount: {
    type: String
  },
  drawerInteriorWidth: {
    type: String
  },
  drawerInteriorDepth: {
    type: String
  },
  drawerInteriorHeight: {
    type: String
  },
  drawerWeightCapacity: {
    type: String
  },
  FeltLinedDrawers: { type: String },
  DrawerGlideMechanism: { type: String },
  DrawerGlideMaterial: { type: String },
  SafetyStop: { type: String },
  SoftCloseorSelfCloseDrawers: { type: String },
  NumberofTablesIncluded: { type: String },
  LargeHeight: { type: String },
  LargeDepth: { type: String },
  LargeWidth: { type: String },
  MediumHeight: { type: String },
  MediumDepth: { type: String },
  MediumWidth: { type: String },
  SidetoSide: { type: String },
  SmallHeight: { type: String },
  SmallDepth: { type: String },
  SmallWidth: { type: String },
  OutdoorUse: { type: String },
  WeightCapacity: { type: String },
  AssemblyRequired: { type: String },
  SuggestedNumberofPeople: { type: String },
  EstimatedTimetoAssemble: { type: String },
  AdditionalToolsRequired: { type: String },
  ToolsNeeded: { type: String }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
