const ProductSpecification = require('./../models/productSpecificationModel');


// Create product
exports.createProductSpecification = async (req, res) => {
  try {
    await ProductSpecification.create({
      mpd: {
    productimage: req.body.productimage,
    supplieritem: req.body.supplierItem,
    suppliermaterialcode: req.body.suppliermaterialcode,
    cost: req.body.cost,
    moq: req.body.moq,
    cbmofmasterctn: req.body.cbmofmasterctn,
    cartonsperitem: req.body.cartonsperitem,
    itemspercarton: req.body.itemspercarton
  },
  materials_color: {
    material: req.body.material,
    color: req.body.color
  },
  pdw: {
    width: req.body.width,
    depth: req.body.depth,
    height: req.body.height,
    weight: req.body.weight,
    fourthdimension: req.body.fourthDimension
  },

  reg_compliance: {
    complianttb1172013: req.body.tb117compliant,
    californiaregistraion: req.body.californiaregistration,
    tssaregistration: req.body.tssaregistration,
    quebecregistration: req.body.quebecregistration
  },
  reg_warranty: {
    tscacarbcompliant: req.body.tscacarbcompliant,
    proposition65compliance: req.body.propositioncompliance,
    proposition65chemical: req.body.propositionchemical,
    warranty: req.body.warranty,
    warrantyforcommercialuse: req.body.warrantyforcommercialuse,
    countryofmanufacture: req.body.countryofmanufacture
  }
    });
    res.status(200).send('Specification created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all products
exports.listProductSpecifications = async (req, res) => {
  try {
    const specifications = await ProductSpecification.find();
    res.status(200).json({
      status: 'success',
      results: specifications.length,
      data: {
        specifications
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit product
exports.listProductSpecification = async (req, res) => {
  try {
    const specification = await ProductSpecification.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        specification
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update product
exports.updateProductSpecification = async (req, res) => {
  try {
    const updatedProductSpecification = await ProductSpecification.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'Updated',
      data: {
        user: updatedProductSpecification
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete User
exports.deleteProductSpecification = async (req, res) => {
  try {
    await ProductSpecification.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
