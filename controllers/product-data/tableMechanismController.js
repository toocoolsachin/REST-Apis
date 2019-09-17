const TableMechanism = require('../../models/product-data/tableMechanismModel');

exports.addTableMechanism = async (req, res) => {
  console.log(req.body);
  try {
    await TableMechanism.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTableMechanism = async (req, res) => {
  try {
    const TableMechanisms = await TableMechanism.find({});
    res.status(200).json({
      status: 'success',
      results: TableMechanisms.length,
      data: {
        TableMechanisms
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTableMechanism = async (req, res) => {
  try {
    const TableMechanism = await TableMechanism.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        TableMechanism
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTableMechanism = async (req, res) => {
  try {
    const newTableMechanism = await TableMechanism.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newTableMechanism
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTableMechanism = async (req, res) => {
  try {
    await TableMechanism.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
