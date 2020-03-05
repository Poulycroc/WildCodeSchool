const { Todo } = require("../models");

const index = (req, res) => {
  return Todo.findAll()
    .then(todos => res.status(200).send(todos))
    .catch(e => res.status(500).send(e));
};

const create = (req, res) => {
  const newTodo = req.body.todo;
  return Todo.create(newTodo)
    .then(todo => res.status(200).send(todo))
    .catch(e => res.status(500).send(e));
};

module.exports = {
  index,
  create
};
