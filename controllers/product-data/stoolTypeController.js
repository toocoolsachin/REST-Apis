const StoolType = require('../../models/product-data/stoolTypeModel');

exports.addStoolType = async (req, res) => {
  console.log(req.body);
  try {
    await StoolType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showStoolType = async (req, res) => {
  try {
    const StoolTypes = await StoolType.find({});
    res.status(200).json({
      status: 'success',
      results: StoolTypes.length,
      data: {
        StoolTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editStoolType = async (req, res) => {
  try {
    const StoolType = await StoolType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        StoolType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateStoolType = async (req, res) => {
  try {
    const newStoolType = await StoolType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newStoolType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteStoolType = async (req, res) => {
  try {
    await StoolType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
