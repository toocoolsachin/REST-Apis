const TableTypeDining = require('../../models/product-data/tableTypeDiningModel');

exports.addTableTypeDining = async (req, res) => {
  console.log(req.body);
  try {
    await TableTypeDining.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTableTypeDining = async (req, res) => {
  try {
    const TableTypeDinings = await TableTypeDining.find({});
    res.status(200).json({
      status: 'success',
      results: TableTypeDinings.length,
      data: {
        TableTypeDinings
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTableTypeDining = async (req, res) => {
  try {
    const TableTypeDining = await TableTypeDining.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        TableTypeDining
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTableTypeDining = async (req, res) => {
  try {
    const newTableTypeDining = await TableTypeDining.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newTableTypeDining
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTableTypeDining = async (req, res) => {
  try {
    await TableTypeDining.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
