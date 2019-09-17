const QC = require('../../models/contacts/qcModel');

exports.addQC = async (req, res) => {
  console.log(req.body);
  try {
    await QC.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      domain: req.body.domain,
      location: req.body.location,
      avatar: req.body.avatar
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showAllQCs = async (req, res) => {
  try {
    const qcs = await QC.find({});
    res.status(200).json({
      status: 'success',
      results: qcs.length,
      data: {
        qcs
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editQC = async (req, res) => {
  try {
    const qc = await QC.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        qc
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateQC = async (req, res) => {
  try {
    const newQC = await QC.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newQC
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteQC = async (req, res) => {
  try {
    await QC.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
