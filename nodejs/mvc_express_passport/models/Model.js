// 3 // create model of action sql

const con = require("../database/db.js");
const now = new Date();


// create class gathering common info to every actions (constructor)

function Model(options) {
  this.db = con;
  this.state = {
    created_at: now,
    updated_at: now
  };
  this.tableName = options.tableName;
}

// create actions:

Model.prototype.selectAll = function(callback) {
  const sql = "SELECT * FROM " + this.tableName;
  this.db.query(sql, callback);
};

Model.prototype.insert = function (data, callback) {
  const sql = `INSERT INTO ${this.tableName} SET ?`
  const mergedData = Object.assign(this.state, data)
  this.db.query(sql, mergedData, callback)
};

Model.prototype.findById = function(id, callback){
  const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
  this.db.query(sql, id, callback)
};

Model.prototype.update = function(id, data, callback){
  data.updated_at = this.state.updated_at
  const sql = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
  const array = [id, data]
  this.db.query(sql, array, callback)
};

Model.prototype.delete = function(id, callback){
  const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
  this.db.query(sql, id, callback)
};

// actions linked to column and table (no router)

Model.prototype.linkTable = function(otherTable, otherTableColumn, callback){
  const sql = `SELECT ${this.tableName}.id FROM ${this.tableName} RIGHT JOIN ${otherTable} ON ${this.tableName}.id = ${otherTableColumn}`;
  const array = [otherTable, otherTableColumn]
  this.db.query(sql, array, callback);
};



///////////////////////////////////

// Model.prototype.deleteValue = function(id, data, column, callback){
//   const sql = `UPDATE ${this.tableName} SET ${column} = NULL WHERE id = ?`
//   const array = [id, data, column]
//   this.db.query(sql, array, callback)
// }

//////////////////////////////////





// const linkTable = function(callback) {
//   const sql = "SELECT users.id FROM users RIGHT JOIN basket ON users.id = basket.userID";
//   con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(`Tables joined!`);
//       console.log({ result })
//     });
// };

// outerLink()



module.exports = Model;

// => Todos.js, User.js.... so they can use it as model




