const AssemblyLevel = require('../../models/product-data/assemblyLevelModel');

exports.addAssemblyLevel = async (req, res) => {
  console.log(req.body);
  try {
    await AssemblyLevel.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showAssemblyLevel = async (req, res) => {
  try {
    const AssemblyLevels = await AssemblyLevel.find({});
    res.status(200).json({
      status: 'success',
      results: AssemblyLevels.length,
      data: {
        AssemblyLevels
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editAssemblyLevel = async (req, res) => {
  try {
    const AssemblyLevel = await AssemblyLevel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        AssemblyLevel
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateAssemblyLevel = async (req, res) => {
  try {
    const newAssemblyLevel = await AssemblyLevel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newAssemblyLevel
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteAssemblyLevel = async (req, res) => {
  try {
    await AssemblyLevel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
