const Pillow = require('../../models/product-data/pillowModel');

exports.addPillow = async (req, res) => {
  console.log(req.body);
  try {
    await Pillow.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showPillow = async (req, res) => {
  try {
    const Pillows = await Pillow.find({});
    res.status(200).json({
      status: 'success',
      results: Pillows.length,
      data: {
        Pillows
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editPillow = async (req, res) => {
  try {
    const Pillow = await Pillow.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        Pillow
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updatePillow = async (req, res) => {
  try {
    const newPillow = await Pillow.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newPillow
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deletePillow = async (req, res) => {
  try {
    await Pillow.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
