const con = require("../database/db.js");
const now = new Date();

function Model(options) {
  this.db = con;
  this.state = {
    created_at: now,
    updated_at: now
  };
  this.tableName = options.tableName;
}

Model.prototype.all = function(callback) {
  const sql = "SELECT * FROM " + this.tableName;
  this.db.query(sql, callback);
};

Model.prototype.insert = function (data, callback) {
  const sql = `INSERT INTO ${this.tableName} SET ?`
  const mergedData = Object.assign(this.state, data)
  console.log({ mergedData })
  // this.db.query(sql, mergedData, callback)
} 

module.exports = Model;
