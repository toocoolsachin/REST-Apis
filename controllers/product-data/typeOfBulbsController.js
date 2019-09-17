const TypeOfBulb = require('../../models/product-data/typeOfBulbsModel');

exports.addTypeOfBulb = async (req, res) => {
  console.log(req.body);
  try {
    await TypeOfBulb.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTypeOfBulb = async (req, res) => {
  try {
    const TypeOfBulbs = await TypeOfBulb.find({});
    res.status(200).json({
      status: 'success',
      results: TypeOfBulbs.length,
      data: {
        TypeOfBulbs
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTypeOfBulb = async (req, res) => {
  try {
    const TypeOfBulb = await TypeOfBulb.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        TypeOfBulb
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTypeOfBulb = async (req, res) => {
  try {
    const newTypeOfBulb = await TypeOfBulb.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newTypeOfBulb
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTypeOfBulb = async (req, res) => {
  try {
    await TypeOfBulb.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
