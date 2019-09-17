const HangingMethod = require('../../models/product-data/hangingMethodModel');

exports.addHangingMethod = async (req, res) => {
  console.log(req.body);
  try {
    await HangingMethod.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showHangingMethod = async (req, res) => {
  try {
    const HangingMethods = await HangingMethod.find({});
    res.status(200).json({
      status: 'success',
      results: HangingMethods.length,
      data: {
        HangingMethods
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editHangingMethod = async (req, res) => {
  try {
    const HangingMethod = await HangingMethod.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        HangingMethod
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateHangingMethod = async (req, res) => {
  try {
    const newHangingMethod = await HangingMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newHangingMethod
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteHangingMethod = async (req, res) => {
  try {
    await HangingMethod.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
