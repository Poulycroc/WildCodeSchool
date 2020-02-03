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
  this.helpers = {
    /**
     * @param {Undefined or Array} col
     * @return {String}
     */
    select: (col) => {
      let prepar = '*'
      if (col !== undefined)
        prepar = col.join(', ')
      return `
        SELECT ${prepar} 
        FROM ${this.tableName}
      `
    },

    /**
     * @return {String}
     */
    insert: () => {
      return `
        INSERT INTO ${this.tableName} 
        SET ?
      `
    }
  };
  this.state = {
    created_at: now,
    updated_at: now
  };
}

/**
 * @param {Function} callback
 */
Model.prototype.getAll = function(callback) {
  const sql = this.helpers.select();
  this.db.query(sql, callback);
};

/**
 * @param {Number} id
 * @param {Function} callback
 */
Model.prototype.findById = function(id, callback) {
  const sql = `
    ${this.helpers.select()} 
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
  const sql = this.helpers.insert();
  this.db.query(sql, mergedData, callback);
};

/**
 * @param {Object} data
 * @param {Function} callback
 */
Model.prototype.update = function(id, data, callback) {
  data.updated_at = this.state.updated_at;
  const sql = `
    ${this.helpers.insert()} 
    WHERE id = ?
  `;
  const arr = [data, id];
  this.db.query(sql, arr, callback);
};

module.exports = Model;
