const OfficeChairFrame = require('../../models/product-data/officeChairFrameModel');

exports.addOfficeChairFrame = async (req, res) => {
  console.log(req.body);
  try {
    await OfficeChairFrame.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showOfficeChairFrame = async (req, res) => {
  try {
    const OfficeChairFrames = await OfficeChairFrame.find({});
    res.status(200).json({
      status: 'success',
      results: OfficeChairFrames.length,
      data: {
        OfficeChairFrames
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editOfficeChairFrame = async (req, res) => {
  try {
    const OfficeChairFrame = await OfficeChairFrame.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        OfficeChairFrame
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateOfficeChairFrame = async (req, res) => {
  try {
    const newOfficeChairFrame = await OfficeChairFrame.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newOfficeChairFrame
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteOfficeChairFrame = async (req, res) => {
  try {
    await OfficeChairFrame.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
