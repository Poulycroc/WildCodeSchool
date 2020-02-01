const Todo = require('../models/Todo.js');


const index = function(req, res) {
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
  const newTodo = req.body;
  const sql = "INSERT INTO todos SET ?"
  con.query(sql, newTodo, function(err, response) {
    if (err) console.log({ err })
    console.log(response)
    res.json(response)
  });
}

module.exports = {
  index,
  show,
  create
}