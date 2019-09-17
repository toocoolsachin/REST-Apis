const LrTable = require('../../models/product-data/lrTablesModel');

exports.addLrTable = async (req, res) => {
  console.log(req.body);
  try {
    await LrTable.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showLrTable = async (req, res) => {
  try {
    const LrTables = await LrTable.find({});
    res.status(200).json({
      status: 'success',
      results: LrTables.length,
      data: {
        LrTables
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editLrTable = async (req, res) => {
  try {
    const LrTable = await LrTable.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        LrTable
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateLrTable = async (req, res) => {
  try {
    const newLrTable = await LrTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newLrTable
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteLrTable = async (req, res) => {
  try {
    await LrTable.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
