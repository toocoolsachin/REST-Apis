const FeetMaterial = require('../../models/product-data/feetMaterialModel');

exports.addFeetMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await FeetMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showFeetMaterials = async (req, res) => {
  try {
    const FeetMaterials = await FeetMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: FeetMaterials.length,
      data: {
        FeetMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editFeetMaterial = async (req, res) => {
  try {
    const FeetMaterial = await FeetMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        FeetMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateFeetMaterial = async (req, res) => {
  try {
    const newFeetMaterial = await FeetMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newFeetMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteFeetMaterial = async (req, res) => {
  try {
    await FeetMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
