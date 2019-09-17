const LampType = require('../../models/product-data/lampTypeModel');

exports.addLampType = async (req, res) => {
  console.log(req.body);
  try {
    await LampType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showLampType = async (req, res) => {
  try {
    const LampTypes = await LampType.find({});
    res.status(200).json({
      status: 'success',
      results: LampTypes.length,
      data: {
        LampTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editLampType = async (req, res) => {
  try {
    const LampType = await LampType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        LampType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateLampType = async (req, res) => {
  try {
    const newLampType = await LampType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newLampType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteLampType = async (req, res) => {
  try {
    await LampType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
