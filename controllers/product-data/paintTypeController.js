const PaintType = require('../../models/product-data/paintTypeModel');

exports.addPaintType = async (req, res) => {
  console.log(req.body);
  try {
    await PaintType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showPaintType = async (req, res) => {
  try {
    const PaintTypes = await PaintType.find({});
    res.status(200).json({
      status: 'success',
      results: PaintTypes.length,
      data: {
        PaintTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editPaintType = async (req, res) => {
  try {
    const PaintType = await PaintType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        PaintType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updatePaintType = async (req, res) => {
  try {
    const newPaintType = await PaintType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newPaintType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deletePaintType = async (req, res) => {
  try {
    await PaintType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
