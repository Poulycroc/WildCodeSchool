const Todo = require("../models/Todo.js");

const index = function(req, res) {
  const todo = new Todo()
  
  todo.all((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const show = (req, res) => {
  const TodoID = req.params.id;
  const todo = new Todo()

  todo.findById(TodoID, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

const create = (req, res) => {
  const newToDo = req.body;
  const todo = new Todo()

  todo.createToDo(newToDo, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};

module.exports = {
  index,
  show,
  create
};
