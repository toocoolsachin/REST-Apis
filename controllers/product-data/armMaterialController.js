const ArmMaterial = require('../../models/product-data/armMaterialModel');

exports.addArmMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await ArmMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showArmMaterial = async (req, res) => {
  try {
    const armmaterials = await ArmMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: armmaterials.length,
      data: {
        armmaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editArmMaterial = async (req, res) => {
  try {
    const armmaterial = await ArmMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        armmaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateArmMaterial = async (req, res) => {
  try {
    const newArmMaterial = await ArmMaterial.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newArmMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteArmMaterial = async (req, res) => {
  try {
    await ArmMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
