const EtcType = require('../../models/product-data/etcTypeModel');

exports.addEtcType = async (req, res) => {
  console.log(req.body);
  try {
    await EtcType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showEtcTypes = async (req, res) => {
  try {
    const EtcTypes = await EtcType.find({});
    res.status(200).json({
      status: 'success',
      results: EtcTypes.length,
      data: {
        EtcTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editEtcType = async (req, res) => {
  try {
    const EtcType = await EtcType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        EtcType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateEtcType = async (req, res) => {
  try {
    const newEtcType = await EtcType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newEtcType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteEtcType = async (req, res) => {
  try {
    await EtcType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
