const con = require('../database/db.js')
const tableName = 'todos'

const all = function (callback) {
  const sql = "SELECT * FROM " + tableName
  con.query(sql, callback)
}

const findById = function (id, callback) {
  const sql = 'SELECT * FROM todos WHERE id = ?';
  con.query(sql, id, callback)
}

const createToDo = function (task, callback) {
  const sql = "INSERT INTO todos SET ?"
  con.query(sql, task, callback)
}



module.exports = {
  all,
  findById,
  createToDo
}