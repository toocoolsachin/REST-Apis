const UpholsteryType = require('../../models/product-data/upholsteryTypeModel');

exports.addUpholsteryType = async (req, res) => {
  console.log(req.body);
  try {
    await UpholsteryType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showUpholsteryType = async (req, res) => {
  try {
    const UpholsteryTypes = await UpholsteryType.find({});
    res.status(200).json({
      status: 'success',
      results: UpholsteryTypes.length,
      data: {
        UpholsteryTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editUpholsteryType = async (req, res) => {
  try {
    const UpholsteryType = await UpholsteryType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        UpholsteryType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateUpholsteryType = async (req, res) => {
  try {
    const newUpholsteryType = await UpholsteryType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newUpholsteryType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteUpholsteryType = async (req, res) => {
  try {
    await UpholsteryType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
