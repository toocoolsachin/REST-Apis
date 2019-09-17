const HardwareMaterial = require('../../models/product-data/hardwareMaterialModel');

exports.addHardwareMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await HardwareMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showHardwareMaterial = async (req, res) => {
  try {
    const HardwareMaterials = await HardwareMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: HardwareMaterials.length,
      data: {
        HardwareMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editHardwareMaterial = async (req, res) => {
  try {
    const HardwareMaterial = await HardwareMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        HardwareMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateHardwareMaterial = async (req, res) => {
  try {
    const newHardwareMaterial = await HardwareMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newHardwareMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteHardwareMaterial = async (req, res) => {
  try {
    await HardwareMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
