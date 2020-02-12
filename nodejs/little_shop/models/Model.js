const con = require("../database/db");
const now = new Date();

function Model(options) {
  this.db = con;
  this.tableName = options.tableName;
  this.state = {
    created_at: now,
    updated_at: now
  };
}

Model.prototype.findAll = function(callback) {
  const sql = `SELECT * FROM ${this.tableName}`;
  this.db.query(sql, callback);
};

Model.prototype.insert = function(data, callback) {
  const sql = `INSERT INTO ${this.tableName} SET ?`;
  const mergedData = Object.assign(this.state, data);
  this.db.query(sql, mergedData, callback);
};

Model.prototype.findById = function(id, callback) {
  const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
  this.db.query(sql, id, callback);
};

Model.prototype.update = function(id, data, callback) {
  data.updated_at = this.state.updated_at;
  const sql = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
  this.db.query(sql, [data, id], callback);
};

Model.prototype.delete = function(id, callback) {
  const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
  this.db.query(sql, id, callback);
};

module.exports = Model;
