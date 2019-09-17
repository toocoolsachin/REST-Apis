const PaintingMainMaterial = require('../../models/product-data/paintingMainMaterialModel');

exports.addPaintingMainMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await PaintingMainMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showPaintingMainMaterial = async (req, res) => {
  try {
    const PaintingMainMaterials = await PaintingMainMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: PaintingMainMaterials.length,
      data: {
        PaintingMainMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editPaintingMainMaterial = async (req, res) => {
  try {
    const PaintingMainMaterial = await PaintingMainMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        PaintingMainMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updatePaintingMainMaterial = async (req, res) => {
  try {
    const newPaintingMainMaterial = await PaintingMainMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newPaintingMainMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deletePaintingMainMaterial = async (req, res) => {
  try {
    await PaintingMainMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
