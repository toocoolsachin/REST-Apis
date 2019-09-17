const Card = require('./../models/cardModel');

// Create Card
exports.createCard = async (req, res) => {
  try {
    await Card.create({
      cardName: req.body.cardName,
      description: req.body.description,
      idAttachmentCover: req.body.idAttachmentCover,
      idMembers: req.body.idMembers,
      idLabels: req.body.idLabels,
      attachments: req.body.attachments,
      subscribed: req.body.subscribed,
      checklists: req.body.checklists,
      checkItems: req.body.checkItems,
      checkItemsChecked: req.body.checkItemsChecked,
      comments: req.body.comments,
      activities: req.body.activities,
      due: req.body.due
    });
    res.status(200).send('Card Created');
  } catch (err) {
    res.status(404).send(err);
  }
};

// Get all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json({
      status: 'success',
      results: cards.length,
      data: {
        cards
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Edit card
exports.getCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        card
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Update card
exports.updateCard = async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        card: updatedCard
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

// Delete card
exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
