const Model = require("./Model");

function Cart() {
  Model.call(this, {
    tableName: "cart"
  });
}

Cart.prototype = Object.create(Model.prototype);
Cart.prototype.constructor = Model;

Cart.prototype.insert = function(data, callback) {
  const sql = `INSERT INTO ${this.tableName} SET ?`;
  this.db.query(sql, data, callback);
};

module.exports = Cart;
