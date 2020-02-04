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
    const newToDo = req.body;
    Todo.createToDo(newToDo, (err, response) => {
        if (err) throw err
        res.json(response)
    })
}

const update = (req, res) => {
    const newToDo = req.body;
    const id = req.params.id;
    Todo.updateToDo(id, newToDo, (err, response) => {
        if (err) throw err
        res.json(response)
    })
}

module.exports = {
    index,
    show,
    create,
    update
}