const Comment = require('../models/commentModel');

exports.addComment = async (req, res) => {
  try {
    await Comment.create({
      idMember: req.body.idMember,
      message: req.body.message,
      time: req.body.time
    });
    res.status(200).send('Done');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).send(comments);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedComment);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(400).send(err);
  }
};
