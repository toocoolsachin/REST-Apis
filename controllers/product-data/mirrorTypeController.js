const MirrorType = require('../../models/product-data/mirrorTypeModel');

exports.addMirrorType = async (req, res) => {
  console.log(req.body);
  try {
    await MirrorType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showMirrorType = async (req, res) => {
  try {
    const MirrorTypes = await MirrorType.find({});
    res.status(200).json({
      status: 'success',
      results: MirrorTypes.length,
      data: {
        MirrorTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editMirrorType = async (req, res) => {
  try {
    const MirrorType = await MirrorType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        MirrorType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateMirrorType = async (req, res) => {
  try {
    const newMirrorType = await MirrorType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newMirrorType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteMirrorType = async (req, res) => {
  try {
    await MirrorType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
