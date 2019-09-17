const DrawerGlides = require('../../models/product-data/drawerGlidesModel');

exports.addDrawerGlides = async (req, res) => {
  console.log(req.body);
  try {
    await DrawerGlides.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showDrawerGlides = async (req, res) => {
  try {
    const DrawerGlidess = await DrawerGlides.find({});
    res.status(200).json({
      status: 'success',
      results: DrawerGlidess.length,
      data: {
        DrawerGlidess
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editDrawerGlides = async (req, res) => {
  try {
    const DrawerGlides = await DrawerGlides.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        DrawerGlides
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateDrawerGlides = async (req, res) => {
  try {
    const newDrawerGlides = await DrawerGlides.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newDrawerGlides
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteDrawerGlides = async (req, res) => {
  try {
    await DrawerGlides.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
