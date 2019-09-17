const Gloss = require('../../models/product-data/glossModel');

exports.addGloss = async (req, res) => {
  console.log(req.body);
  try {
    await Gloss.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showGloss = async (req, res) => {
  try {
    const Glosses = await Gloss.find({});
    res.status(200).json({
      status: 'success',
      results: Glosses.length,
      data: {
        Glosses
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editGloss = async (req, res) => {
  try {
    const Gloss = await Gloss.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        Gloss
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateGloss = async (req, res) => {
  try {
    const newGloss = await Gloss.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newGloss
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteGloss = async (req, res) => {
  try {
    await Gloss.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
