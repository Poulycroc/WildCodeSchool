const con = require('../database/db.js')
const tableName = 'todos'

const all = function(callback) {
  const sql = "SELECT * FROM " + tableName
  con.query(sql, callback)
}

module.exports = {
  all
}