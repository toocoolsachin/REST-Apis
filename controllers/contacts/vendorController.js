const Vendor = require('../../models/contacts/vendorModel');

exports.addVendor = async (req, res) => {
  console.log(req.body);
  try {
    await Vendor.create({
      name: req.body.name,
      contact_person: req.body.contact_person,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      domain: req.body,domain,
      avatar: req.body.avatar
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.status(200).json({
      status: 'success',
      results: vendors.length,
      data: {
        vendors
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        vendor
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const newVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newVendor
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
