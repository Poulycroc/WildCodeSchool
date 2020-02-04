const Todo = require('../models/Todo.js');


const index = function (req, res) {
  Todo.all((err, result) => {
    if (err) throw err
    res.json(result)
  })
}

const show = (req, res) => {
  const TodoID = req.params.id
  Todo.findById(TodoID, (err, result) => {
    if (err) throw err
    res.json(result[0])
  });
}

const create = (req, res) => {
  const newToDo = req.body;
  Todo.createToDo(newToDo, (err, response) => {
    if (err) throw err
    res.json(response)
  })
}

const update = (req, res) => {
  const updateTodo = req.body;
  const TodoID = req.params.id; 
  Todo.updateTodo(TodoID, updateTodo, (err, response) => {
    if (err) throw err
    res.json(response)
  })
}

const erase = (req, res) => {
  const newToDelete = req.params.id;
  Todo.deleteToDo(newToDelete, (err, response) => {
    if (err) throw err
    res.json(response)
  })
}


module.exports = {
  index,
  show,
  create,
  erase,
  update
}