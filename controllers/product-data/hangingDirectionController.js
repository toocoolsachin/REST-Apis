const HangingDirection = require('../../models/product-data/hangingDirectionModel');

exports.addHangingDirection = async (req, res) => {
  console.log(req.body);
  try {
    await HangingDirection.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showHangingDirection = async (req, res) => {
  try {
    const HangingDirections = await HangingDirection.find({});
    res.status(200).json({
      status: 'success',
      results: HangingDirections.length,
      data: {
        HangingDirections
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editHangingDirection = async (req, res) => {
  try {
    const HangingDirection = await HangingDirection.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        HangingDirection
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateHangingDirection = async (req, res) => {
  try {
    const newHangingDirection = await HangingDirection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newHangingDirection
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteHangingDirection = async (req, res) => {
  try {
    await HangingDirection.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
