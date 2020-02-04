const con = require('../database/db.js')
const tableName = 'todos'
const now = new Date()

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