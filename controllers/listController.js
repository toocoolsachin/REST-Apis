const List = require('./../models/listModel');

// Create List
exports.createList = async (req, res) => {
  try {
    await List.create({
      listName: req.body.listName,
      idCards: req.body.idCards
    });
    res.status(200).send('List Created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all Lists
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json({
      status: 'success',
      results: lists.length,
      data: {
        lists
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit list
exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        list
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update list
exports.updateList = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        list: updatedList
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete list
exports.deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
