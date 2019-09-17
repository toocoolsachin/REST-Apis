const Tufted = require('../../models/product-data/tuftedModel');

exports.addTufted = async (req, res) => {
  console.log(req.body);
  try {
    await Tufted.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTufted = async (req, res) => {
  try {
    const Tufteds = await Tufted.find({});
    res.status(200).json({
      status: 'success',
      results: Tufteds.length,
      data: {
        Tufteds
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTufted = async (req, res) => {
  try {
    const Tufted = await Tufted.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        Tufted
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTufted = async (req, res) => {
  try {
    const newTufted = await Tufted.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newTufted
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTufted = async (req, res) => {
  try {
    await Tufted.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
