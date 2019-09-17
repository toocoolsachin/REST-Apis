const HangingHardware = require('../../models/product-data/hangingHardwareModel');

exports.addHangingHardware = async (req, res) => {
  console.log(req.body);
  try {
    await HangingHardware.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showHangingHardware = async (req, res) => {
  try {
    const HangingHardwares = await HangingHardware.find({});
    res.status(200).json({
      status: 'success',
      results: HangingHardwares.length,
      data: {
        HangingHardwares
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editHangingHardware = async (req, res) => {
  try {
    const HangingHardware = await HangingHardware.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        HangingHardware
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateHangingHardware = async (req, res) => {
  try {
    const newHangingHardware = await HangingHardware.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newHangingHardware
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteHangingHardware = async (req, res) => {
  try {
    await HangingHardware.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
