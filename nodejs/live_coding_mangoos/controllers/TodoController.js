/**
 * TodoController
 */

// get our model
const Todo = require("../models/Todo");

// get all todos
const index = (req, res) => {
  /**
   * @param {Object} - empty object for get all elements
   * @param {Function} callback
   */
  Todo.find({}, (err, todos) => {
    if (err) console.error(err);
    res.send(JSON.stringify(todos));
  });
};

const add = (req, res) => {
  // return title and complete from the body
  const { title, complete } = req.body;

  // adding the new todo in our TodoModel
  const newTodo = new Todo({
    title,
    complete
  });

  /**
   * saving new todo in database
   * @param {Function} callback
   */
  newTodo.save(function(err, todo) {
    if (err) console.error(err);
    res.send(JSON.stringify(todo));
  });
};

module.exports = {
  index,
  add
};
