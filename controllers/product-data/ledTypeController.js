const LedType = require('../../models/product-data/ledTypeModel');

exports.addLedType = async (req, res) => {
  console.log(req.body);
  try {
    await LedType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showLedType = async (req, res) => {
  try {
    const LedTypes = await LedType.find({});
    res.status(200).json({
      status: 'success',
      results: LedTypes.length,
      data: {
        LedTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editLedType = async (req, res) => {
  try {
    const LedType = await LedType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        LedType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateLedType = async (req, res) => {
  try {
    const newLedType = await LedType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newLedType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteLedType = async (req, res) => {
  try {
    await LedType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
