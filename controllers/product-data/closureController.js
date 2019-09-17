const Closure = require('../../models/product-data/closureModel');

exports.addClosure = async (req, res) => {
  console.log(req.body);
  try {
    await Closure.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showClosure = async (req, res) => {
  try {
    const Closures = await Closure.find({});
    res.status(200).json({
      status: 'success',
      results: Closures.length,
      data: {
        Closures
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editClosure = async (req, res) => {
  try {
    const Closure = await Closure.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        Closure
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateClosure = async (req, res) => {
  try {
    const newClosure = await Closure.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newClosure
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteClosure = async (req, res) => {
  try {
    await Closure.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
