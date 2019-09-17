const BedSize = require('../../models/product-data/bedSizeModel');

exports.addBedSize = async (req, res) => {
  console.log(req.body);
  try {
    await BedSize.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showBedSize = async (req, res) => {
  try {
    const BedSizes = await BedSize.find({});
    res.status(200).json({
      status: 'success',
      results: BedSizes.length,
      data: {
        BedSizes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editBedSize = async (req, res) => {
  try {
    const BedSize = await BedSize.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        BedSize
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateBedSize = async (req, res) => {
  try {
    const newBedSize = await BedSize.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newBedSize
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteBedSize = async (req, res) => {
  try {
    await BedSize.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
