const Merchandiser = require('../../models/contacts/merchandiserModel');

exports.addMerchandiser = async (req, res) => {
  console.log(req.body.newContact);
  try {
    await Merchandiser.create({
      name: req.body.newContact.name,
      email: req.body.newContact.email,
      phone: req.body.newContact.phone,
      address: req.body.newContact.address,
      domain: req.body.newContact.newContact.domain,
      avatar: req.body.newContact.avatar
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showAllMerchandisers = async (req, res) => {
  try {
    const merchandisers = await Merchandiser.find({});
    res.status(200).json({
      status: 'success',
      results: merchandisers.length,
      data: {
        merchandisers
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editMerchandiser = async (req, res) => {
  try {
    const merchandiser = await Merchandiser.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        merchandiser
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateMerchandiser = async (req, res) => {
  try {
    const newMerchandiser = await Merchandiser.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newMerchandiser
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteMerchandiser = async (req, res) => {
  try {
    await Merchandiser.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
