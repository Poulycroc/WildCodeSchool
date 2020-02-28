const Model = require("./Model");

function Address() {
  Model.call(this, {
    tableName: "address"
  });
}

Address.prototype = Object.create(Model.prototype);
Address.prototype.constructor = Model;

Address.prototype.insert = function(data, callback) {
  const sql = `INSERT INTO ${this.tableName} SET ?`;
  //const mergedData = Object.assign(this.state, data);
  this.db.query(sql, data, callback);
};

module.exports = Address;
