const ArmType = require('../../models/product-data/armTypeModel');

exports.addArmType = async (req, res) => {
  console.log(req.body);
  try {
    await ArmType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showArmType = async (req, res) => {
  try {
    const ArmTypes = await ArmType.find({});
    res.status(200).json({
      status: 'success',
      results: ArmTypes.length,
      data: {
        ArmTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editArmType = async (req, res) => {
  try {
    const ArmType = await ArmType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        ArmType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateArmType = async (req, res) => {
  try {
    const newArmType = await ArmType.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newArmType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteArmType = async (req, res) => {
  try {
    await ArmType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
