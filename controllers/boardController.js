const Board = require('./../models/boardModel');

// Create board
exports.createBoard = async (req, res) => {
  try {
    await Board.create({
      boardName: req.body.boardName,
      settings: req.body.settings,
      lists: req.body.lists,
      cards: req.body.cards,
      members: req.body.members,
      labels: req.body.labels
    });
    res.status(200).send('Board Created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all Boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json({
      status: 'success',
      results: boards.length,
      data: {
        boards
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit board
exports.getBoard = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        board
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update board
exports.updateBoard = async (req, res) => {
  try {
    const updatedBoard = await Board.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        user: updatedBoard
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete Board
exports.deleteBoard = async (req, res) => {
  try {
    await Board.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
