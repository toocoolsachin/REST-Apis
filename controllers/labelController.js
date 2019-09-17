const Label = require('../models/labelModel');

exports.addLabel = async (req, res) => {
  try {
    await Label.create({
      labelName: req.body.labelName,
      class: req.body.class
    });
    res.status(200).send('label added successfully');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getLabels = async (req, res) => {
  try {
    const labels = await Label.find({});
    res.status(200).send(labels);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getLabel = async (req, res) => {
  try {
    const label = await Label.findById(req.params.id);
    res.status(200).send(label);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateLabel = async (req, res) => {
  try {
    const newLabel = await Label.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).send(newLabel);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteLabel = async (req, res) => {
  try {
    await Label.findByIdAndDelete(req.params.id);
    res.status(200).send('label deleted successfully');
  } catch (err) {
    res.status(400).send(err);
  }
};
