const Model = require("./Model");

function Product() {
  Model.call(this, {
    tableName: "products"
  });
}

Product.prototype = Object.create(Model.prototype);
Product.prototype.constructor = Model;

module.exports = Product;
