const CabinetType = require('../../models/product-data/cabinetTypeModel');

exports.addCabinetType = async (req, res) => {
  console.log(req.body);
  try {
    await CabinetType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showCabinetType = async (req, res) => {
  try {
    const CabinetTypes = await CabinetType.find({});
    res.status(200).json({
      status: 'success',
      results: CabinetTypes.length,
      data: {
        CabinetTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editCabinetType = async (req, res) => {
  try {
    const CabinetType = await CabinetType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        CabinetType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateCabinetType = async (req, res) => {
  try {
    const newCabinetType = await CabinetType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newCabinetType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteCabinetType = async (req, res) => {
  try {
    await CabinetType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
