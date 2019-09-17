const MirrorShape = require('../../models/product-data/mirrorShapeModel');

exports.addMirrorShape = async (req, res) => {
  console.log(req.body);
  try {
    await MirrorShape.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showMirrorShape = async (req, res) => {
  try {
    const MirrorShapes = await MirrorShape.find({});
    res.status(200).json({
      status: 'success',
      results: MirrorShapes.length,
      data: {
        MirrorShapes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editMirrorShape = async (req, res) => {
  try {
    const MirrorShape = await MirrorShape.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        MirrorShape
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateMirrorShape = async (req, res) => {
  try {
    const newMirrorShape = await MirrorShape.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newMirrorShape
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteMirrorShape = async (req, res) => {
  try {
    await MirrorShape.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
