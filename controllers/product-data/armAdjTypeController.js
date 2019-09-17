const ArmAdjType = require('../../models/product-data/armAdjTypeModel');

exports.addarmAdjType = async (req, res) => {
  console.log(req.body);
  try {
    await ArmAdjType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showArmAdjTypes = async (req, res) => {
  try {
    const armadjtypes = await ArmAdjType.find({});
    res.status(200).json({
      status: 'success',
      results: armadjtypes.length,
      data: {
        armadjtypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editArmAdjType = async (req, res) => {
  try {
    const armadjtype = await ArmAdjType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        armadjtype
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateArmAdjType = async (req, res) => {
  try {
    const newArmAdjType = await ArmAdjType.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newArmAdjType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteArmAdjType = async (req, res) => {
  try {
    await ArmAdjType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
