const TopMaterial = require('../../models/product-data/topMaterialModel');

exports.addTopMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await TopMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTopMaterial = async (req, res) => {
  try {
    const TopMaterials = await TopMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: TopMaterials.length,
      data: {
        TopMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTopMaterial = async (req, res) => {
  try {
    const TopMaterial = await TopMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        TopMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTopMaterial = async (req, res) => {
  try {
    const newTopMaterial = await TopMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newTopMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTopMaterial = async (req, res) => {
  try {
    await TopMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
