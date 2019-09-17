const UpholsteryProductType = require('../../models/product-data/upholsteryProductTypeModel');

exports.addUpholsteryProductType = async (req, res) => {
  console.log(req.body);
  try {
    await UpholsteryProductType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showUpholsteryProductType = async (req, res) => {
  try {
    const UpholsteryProductTypes = await UpholsteryProductType.find({});
    res.status(200).json({
      status: 'success',
      results: UpholsteryProductTypes.length,
      data: {
        UpholsteryProductTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editUpholsteryProductType = async (req, res) => {
  try {
    const UpholsteryProductType = await UpholsteryProductType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        UpholsteryProductType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateUpholsteryProductType = async (req, res) => {
  try {
    const newUpholsteryProductType = await UpholsteryProductType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newUpholsteryProductType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteUpholsteryProductType = async (req, res) => {
  try {
    await UpholsteryProductType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
