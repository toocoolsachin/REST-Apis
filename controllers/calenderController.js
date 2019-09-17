const Calender = require('../models/calenderModel');

exports.addEvent = async (req, res) => {
  console.log(req.body);
  try {
    await Calender.create({
      title: req.body.newEvent.title,
      allday: req.body.newEvent.allday,
      start: req.body.newEvent.start,
      end: req.body.newEvent.end,
      desc: req.body.newEvent.desc
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showEvent = async (req, res) => {
  try {
    const events = await Calender.find({});
    res.status(200).json(events);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editEvent = async (req, res) => {
  try {
    const event = await Calender.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        event
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const newEvent = await Calender.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newEvent
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Calender.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
