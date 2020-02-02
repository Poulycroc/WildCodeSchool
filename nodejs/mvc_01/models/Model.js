/**
 * NodeJS MVC cours 01
 * Parent Model
 * 
 * @doc https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Heritage
 */
const con = require("../database/db.js");
const now = new Date();

/**
 * @param {String} tableName
 */
function Model(options) {
  this.db = con;
  this.tableName = options.tableName;
  this.state = {
    created_at: now,
    updated_at: now
  };
}

/**
 * @param {Function} callback
 */
Model.prototype.getAll = function(callback) {
  const sql = `
    SELECT * 
    FROM ${this.tableName}
  `;
  this.db.query(sql, callback);
};

/**
 * @param {Number} id
 * @param {Function} callback
 */
Model.prototype.findById = function(id, callback) {
  const sql = `
    SELECT * 
    FROM ${this.tableName} 
    WHERE id = ?
  `;
  this.db.query(sql, id, callback);
};

/**
 * @param {Object} data
 * @param {Function} callback
 */
Model.prototype.insert = function(data, callback) {
  const mergedData = Object.assign(this.state, data);
  const sql = `
    INSERT INTO ${this.tableName} 
    SET ?
  `;
  this.db.query(sql, mergedData, callback);
};

/**
 * @param {Object} data
 * @param {Function} callback
 */
Model.prototype.update = function(id, data, callback) {
  data.updated_at = this.state.updated_at;
  const sql = `
    INSERT INTO ${this.tableName} 
    SET ? 
    WHERE id = ?
  `;
  const arr = [data, id];
  this.db.query(sql, arr, callback);
};

module.exports = Model;
