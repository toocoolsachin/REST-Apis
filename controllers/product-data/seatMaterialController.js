const SeatMaterial = require('../../models/product-data/seatMaterialModel');

exports.addSeatMaterial = async (req, res) => {
  console.log(req.body);
  try {
    await SeatMaterial.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showSeatMaterial = async (req, res) => {
  try {
    const SeatMaterials = await SeatMaterial.find({});
    res.status(200).json({
      status: 'success',
      results: SeatMaterials.length,
      data: {
        SeatMaterials
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editSeatMaterial = async (req, res) => {
  try {
    const SeatMaterial = await SeatMaterial.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        SeatMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateSeatMaterial = async (req, res) => {
  try {
    const newSeatMaterial = await SeatMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newSeatMaterial
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteSeatMaterial = async (req, res) => {
  try {
    await SeatMaterial.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
