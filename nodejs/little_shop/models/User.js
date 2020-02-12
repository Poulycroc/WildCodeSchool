const Model = require("./Model");

function User() {
  Model.call(this, {
    tableName: "users"
  });
}

User.prototype = Object.create(Model.prototype);
User.prototype.constructor = Model;

//Custom
User.prototype.findAllUsersWithAddress = function(callback) {
  const sql = `SELECT users.email, address.address FROM ${this.tableName} JOIN address ON ${this.tableName}.id = address.user_id`;
  this.db.query(sql, callback);
};

User.prototype.findCartByUser = function(id, callback) {
  const sql = `SELECT users.email, products.name, products.description, products.price 
                FROM ${this.tableName} 
                JOIN cart ON users.id = cart.user_id
                JOIN products ON products.id = cart.product_id 
                WHERE users.id = ?`;
  this.db.query(sql, id, callback);
};

User.prototype.checkInput = function(data, callback) {
  if (data.email === "") {
    return console.log("Please enter email !");
  } else if (data.password === "") {
    return console.log("Please enter password !");
  } else if (data.password.length < 4 || data.password.length > 12) {
    return console.log("Length password between 4 and 12");
  } else {
    this.insert(data, callback);
  }
};

module.exports = User;
