const DresserType = require('../../models/product-data/dresserTypeModel');

exports.addDresserType = async (req, res) => {
  console.log(req.body);
  try {
    await DresserType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showDresserTypes = async (req, res) => {
  try {
    const DresserTypes = await DresserType.find({});
    res.status(200).json({
      status: 'success',
      results: DresserTypes.length,
      data: {
        DresserTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editDresserType = async (req, res) => {
  try {
    const DresserType = await DresserType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        DresserType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateDresserType = async (req, res) => {
  try {
    const newDresserType = await DresserType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newDresserType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteDresserType = async (req, res) => {
  try {
    await DresserType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
