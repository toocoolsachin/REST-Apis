const FrameMaterial = require('../../models/product-data/frameMaterialModel');

exports.addFrameMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await FrameMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showFrameMaterials = async (req, res) => {
  try {
    const FrameMaterials = await FrameMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: FrameMaterials.length,
      data: {
        FrameMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editFrameMaterial = async (req, res) => {
  try {
    const FrameMaterial = await FrameMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        FrameMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateFrameMaterial = async (req, res) => {
  try {
    const newFrameMaterial = await FrameMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newFrameMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteFrameMaterial = async (req, res) => {
  try {
    await FrameMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
