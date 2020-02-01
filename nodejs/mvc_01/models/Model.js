const con = require("../database/db.js");

function Model(tableName) {
  const now = new Date()
  
  this.db = con
  this.tableName = tableName
  this.state = {
    created_at: now,
    updated_at: now
  } 
}

// Model.prototype.getAll = function() {
//   let response = null
//   const sql = `SELECT * FROM ${this.tableName}`;
//   con.query(sql, (err, result) => {
//     if (err) throw err
//     response = result
//   });
//   return response
// }

module.exports = Model