const Buyer = require('../../models/contacts/buyerModel');

exports.addBuyer = async (req, res) => {
  console.log(req.body);
  try {
    await Buyer.create({
      name: req.body.newContact.name,
      contact_person: req.body.newContact.contact_person,
      email: req.body.newContact.email,
      phone: req.body.newContact.phone,
      address: req.body.newContact.address,
      country: req.body.newContact.country,
      city: req.body.newContact.city,
      requirement: req.body.newContact.requirement,
      file: req.body.newContact.file,
      avatar: req.body.newContact.avatar
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showAllBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find({});
    res.status(200).json({
      status: 'success',
      results: buyers.length,
      data: {
        buyers
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        buyer
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateBuyer = async (req, res) => {
  try {
    const newBuyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newBuyer
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteBuyer = async (req, res) => {
  try {
    await Buyer.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
