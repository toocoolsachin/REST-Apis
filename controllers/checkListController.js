const CheckList = require('../models/checkListModel');

// Create checklist
exports.createCheckList = async (req, res) => {
  try {
    await CheckList.create({
      name: req.body.name,
      checkItems: req.body.checkItems
    });
    res.status(200).send('checklist created');
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all checklists
exports.getAllCheckLists = async (req, res) => {
  try {
    const checklists = await CheckList.find({});
    res.status(200).send(checklists);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get a Checklist
exports.getCheckList = async (req, res) => {
  try {
    const checklist = await CheckList.findById(req.params.id);
    res.status(200).send(checklist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Update checklist
exports.updateCheckList = async (req, res) => {
  try {
    const newChecklist = await CheckList.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).send(newChecklist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete checklist
exports.deleteCheckList = async (req, res) => {
  try {
    await CheckList.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(400).send(err);
  }
};
