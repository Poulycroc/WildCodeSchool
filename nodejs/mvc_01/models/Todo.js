const con = require('../database/db.js')
const tableName = 'todos'
const now = new Date()
class Keys {
  constructor (task) {
    this._name = task.name;
    this._description = task.description;
    this._status = task.status || 0;
    this._created_at = now;
    this._updated_at = task.updated_at || now;
  }
}

const all = function (callback) {
  const sql = "SELECT * FROM " + tableName
  con.query(sql, callback)
}

const findById = function (id, callback) {
  const sql = 'SELECT * FROM todos WHERE id = ?';
  con.query(sql, id, callback)
}

const createToDo = function (task, callback) {
  const sql = `INSERT INTO todos SET ?`
  con.query(sql, task, callback)
} 

const deleteTodo = function (id, callback) {
  const sql = "DELETE FROM todos WHERE id = ?"
  con.query(sql, id, callback)
}

const updateTodo = function (id, task, callback) {
  const now = new Date() 
  task.updated_at = now
  const sql = "UPDATE todos SET ? WHERE id = ?"
  const array = [task, id]
  con.query(sql, array, callback)
}



module.exports = {
  all,
  findById,
  createToDo,
  deleteTodo,
  updateTodo
}