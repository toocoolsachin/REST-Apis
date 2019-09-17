const CleaningCode = require('../../models/product-data/cleaningCodeModel');

exports.addCleaningCode = async (req, res) => {
  console.log(req.body);
  try {
    await CleaningCode.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showCleaningCode = async (req, res) => {
  try {
    const CleaningCodes = await CleaningCode.find({});
    res.status(200).json({
      status: 'success',
      results: CleaningCodes.length,
      data: {
        CleaningCodes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editCleaningCode = async (req, res) => {
  try {
    const CleaningCode = await CleaningCode.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        CleaningCode
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateCleaningCode = async (req, res) => {
  try {
    const newCleaningCode = await CleaningCode.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newCleaningCode
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteCleaningCode = async (req, res) => {
  try {
    await CleaningCode.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
