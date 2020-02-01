const con = require('../database/db.js')
const tableName = 'todos'

const all = function(callback) {
  const sql = "SELECT * FROM " + tableName
  con.query(sql, callback)
}

const findById = function(id , callback) {
  const sql = 'SELECT * FROM todos WHERE id = ?';
  con.query(sql, id , callback)
}


module.exports = {
  all,
  findById
}