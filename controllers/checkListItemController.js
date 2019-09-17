const CheckListItem = require('../models/checkListItemModel');

exports.createCheckListItem = async (req, res) => {
  try {
    await CheckListItem.create({
      item: req.body.item,
      isChecked: req.body.isChecked
    });
    res.status(200).send('Done');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllCheckListItems = async (req, res) => {
  try {
    const items = await CheckListItem.find({});
    res.status(200).send(items);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getCheckListItem = async (req, res) => {
  try {
    const item = await CheckListItem.findById(req.params.id);
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateCheckListItem = async (req, res) => {
  try {
    const newItem = await CheckListItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(newItem);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteCheckListItem = async (req, res) => {
  try {
    await CheckListItem.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(400).send(err);
  }
};
