const Todo = require('../models/todoModel');

exports.addTodo = async (req, res) => {
  console.log(req.body);
  try {
    await Todo.create({
      title: req.body.title,
      notes: req.body.notes,
      startdate: req.body.startdate,
      duedate: req.body.duedate,
      completed: req.body.completed,
      starred: req.body.starred,
      important: req.body.important,
      deleted: req.body.deleted,
      labels: req.body.labels,
      poNumber: req.body.poNumber,
      buyers: req.body.buyers
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      status: 'success',
      results: todos.length,
      data: {
        todos
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        todo
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'updated',
      data: {
        newTodo
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
