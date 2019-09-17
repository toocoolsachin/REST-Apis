const ReversableCushion = require('../../models/product-data/reversableCushionModel');

exports.addReversableCushion = async (req, res) => {
  console.log(req.body);
  try {
    await ReversableCushion.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showReversableCushion = async (req, res) => {
  try {
    const ReversableCushions = await ReversableCushion.find({});
    res.status(200).json({
      status: 'success',
      results: ReversableCushions.length,
      data: {
        ReversableCushions
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editReversableCushion = async (req, res) => {
  try {
    const ReversableCushion = await ReversableCushion.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        ReversableCushion
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateReversableCushion = async (req, res) => {
  try {
    const newReversableCushion = await ReversableCushion.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newReversableCushion
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteReversableCushion = async (req, res) => {
  try {
    await ReversableCushion.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
