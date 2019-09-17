const UpholsteryFill = require('../../models/product-data/upholsteryFillModel');

exports.addUpholsteryFill = async (req, res) => {
  console.log(req.body);
  try {
    await UpholsteryFill.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showUpholsteryFill = async (req, res) => {
  try {
    const UpholsteryFills = await UpholsteryFill.find({});
    res.status(200).json({
      status: 'success',
      results: UpholsteryFills.length,
      data: {
        UpholsteryFills
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editUpholsteryFill = async (req, res) => {
  try {
    const UpholsteryFill = await UpholsteryFill.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        UpholsteryFill
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateUpholsteryFill = async (req, res) => {
  try {
    const newUpholsteryFill = await UpholsteryFill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newUpholsteryFill
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteUpholsteryFill = async (req, res) => {
  try {
    await UpholsteryFill.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
