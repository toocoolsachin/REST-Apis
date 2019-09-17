const Product = require('./../models/productModel');

// Create product
exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    await Product.create({
      itemNumber: req.body.itemNumber,
      productName: req.body.productName,
      productType: req.body.productType,
      mainMaterial: req.body.mainMaterial,
      mainMaterialVariety: req.body.mainMaterialVariety,
      frameMaterial: req.body.frameMaterial,
      frameMaterialVariety: req.body.frameMaterialVariety,
      compositeWoodProduct: req.body.compositeWoodProduct,
      recycledContent: req.body.recycledContent,
      reclaimedWood: req.body.reclaimedWood,
      woodFinish: req.body.woodFinish,
      glossLevel: req.body.glossLevel,
      distressedFinish: req.body.distressedFinish,
      hardwareMaterial: req.body.hardwareMaterial,
      hardwareFinish: req.body.hardwareFinish,
      includeCasters: req.body.includeCasters,
      topMaterial: req.body.topMaterial,
      topMaterialDetails: req.body.topMaterialDetails,
      topThickness: req.body.topThickness,
      drawerCount: req.body.drawerCount,
      drawerInteriorWidth: req.body.drawerInteriorWidth,
      drawerInteriorDepth: req.body.drawerInteriorDepth,
      drawerInteriorHeight: req.body.drawerInteriorHeight,
      drawerWeightCapacity: req.body.drawerWeightCapacity,
      FeltLinedDrawers: req.body.feltLinedDrawers,
      DrawerGlideMechanism: req.body.frawerGlideMechanism,
      DrawerGlideMaterial: req.body.drawerGlideMaterial,
      SafetyStop: req.body.safetyStop,
      SoftCloseorSelfCloseDrawers: req.body.softCloseorSelfCloseDrawers,
      NumberofTablesIncluded: req.body.numberofTablesIncluded,
      LargeHeight: req.body.largeHeight,
      LargeDepth: req.body.largeDepth,
      LargeWidth: req.body.largeWidth,
      MediumHeight: req.body.mediumHeight,
      MediumDepth: req.body.mediumDepth,
      MediumWidth: req.body.mediumWidth,
      SidetoSide: req.body.sidetoSide,
      SmallHeight: req.body.smallHeight,
      SmallDepth: req.body.smallDepth,
      SmallWidth: req.body.smallWidth,
      OutdoorUse: req.body.outdoorUse,
      WeightCapacity: req.body.weightCapacity,
      AssemblyRequired: req.body.assemblyRequired,
      SuggestedNumberofPeople: req.body.suggestedPeople,
      EstimatedTimetoAssemble: req.body.estimatedTimetoAssemble,
      AdditionalToolsRequired: req.body.additionalToolsRequired,
      ToolsNeeded: req.body.toolsNeeded
    });
    res.status(200).send('Product created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit product
exports.listProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'Updated',
      data: {
        user: updatedProduct
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete User
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
