const BenchType = require('../../models/product-data/benchTypeModel');

exports.addBenchType = async (req, res) => {
  console.log(req.body);
  try {
    await BenchType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showBenchType = async (req, res) => {
  try {
    const BenchTypes = await BenchType.find({});
    res.status(200).json({
      status: 'success',
      results: BenchTypes.length,
      data: {
        BenchTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editBenchType = async (req, res) => {
  try {
    const BenchType = await BenchType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        BenchType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateBenchType = async (req, res) => {
  try {
    const newBenchType = await BenchType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newBenchType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteBenchType = async (req, res) => {
  try {
    await BenchType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
