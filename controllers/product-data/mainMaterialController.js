const MainMaterial = require('../../models/product-data/mainMaterialModel');

exports.addMainMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await MainMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showMainMaterial = async (req, res) => {
  try {
    const MainMaterials = await MainMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: MainMaterials.length,
      data: {
        MainMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editMainMaterial = async (req, res) => {
  try {
    const MainMaterial = await MainMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        MainMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateMainMaterial = async (req, res) => {
  try {
    const newMainMaterial = await MainMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newMainMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteMainMaterial = async (req, res) => {
  try {
    await MainMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
