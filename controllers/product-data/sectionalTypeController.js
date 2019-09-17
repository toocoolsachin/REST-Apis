const SectionalType = require('../../models/product-data/sectionalTypeModel');

exports.addSectionalType = async (req, res) => {
  console.log(req.body);
  try {
    await SectionalType.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showSectionalType = async (req, res) => {
  try {
    const SectionalTypes = await SectionalType.find({});
    res.status(200).json({
      status: 'success',
      results: SectionalTypes.length,
      data: {
        SectionalTypes
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editSectionalType = async (req, res) => {
  try {
    const SectionalType = await SectionalType.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        SectionalType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateSectionalType = async (req, res) => {
  try {
    const newSectionalType = await SectionalType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newSectionalType
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteSectionalType = async (req, res) => {
  try {
    await SectionalType.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
