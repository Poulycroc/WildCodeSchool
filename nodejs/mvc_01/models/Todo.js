// Model important
// - it's our model's base
const Model = require("./Model");

function Todo() {
  /**
   * ici on envoi le context d'environement
   * 'this'
   */
  Model.call(this, {
    tableName: "todos"
  });

  /**
   * ici je complete le state du parent avec des
   * element propre a class Todo
   */
  this.state.status = 0;
}

/**
 * construction de l'héritage (délégation)
 * du parent a notre class Todo
 */
Todo.prototype = Object.create(Model.prototype);
Todo.prototype.constructor = Model;

/**
 * @param {Object} task - the new task
 * @param {Function} callback
 */
Todo.prototype.addTodo = function(task, callback) {
  if (task.name == undefined) throw "Please provide name";
  this.insert(task, callback);
};

module.exports = Todo;
