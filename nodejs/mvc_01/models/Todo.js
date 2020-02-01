const Model = require("./Model")

function Todo() {
  Model.call(this, 'todos');
  this.state.status = 0
};

Todo.prototype = Object.create(Model.prototype);
Todo.prototype.constructor = Model;

Todo.prototype.all = function(callback) {
  const sql = `SELECT * FROM ${this.tableName}`;
  this.db.query(sql, callback);
};

Todo.prototype.findById = function(id, callback) {
  const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
  this.db.query(sql, id, callback);
};

Todo.prototype.createToDo = function(task, callback) {
  if (task.name == undefined) throw 'Please provide name';
  const todo = Object.assign(this.state, task)
  const sql = `INSERT INTO ${this.tableName} SET ?`;
  this.db.query(sql, todo, callback);
};

module.exports = Todo
