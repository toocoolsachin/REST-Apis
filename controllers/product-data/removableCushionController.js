const RemovableCushion = require('../../models/product-data/removableCushionsModel');

exports.addRemovableCushion = async (req, res) => {
  console.log(req.body);
  try {
    await RemovableCushion.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showRemovableCushion = async (req, res) => {
  try {
    const RemovableCushions = await RemovableCushion.find({});
    res.status(200).json({
      status: 'success',
      results: RemovableCushions.length,
      data: {
        RemovableCushions
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editRemovableCushion = async (req, res) => {
  try {
    const RemovableCushion = await RemovableCushion.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        RemovableCushion
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateRemovableCushion = async (req, res) => {
  try {
    const newRemovableCushion = await RemovableCushion.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newRemovableCushion
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteRemovableCushion = async (req, res) => {
  try {
    await RemovableCushion.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
