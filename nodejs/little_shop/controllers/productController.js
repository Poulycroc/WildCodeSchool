const Product = require("../models/Product");

module.exports = {
  new: (req, res) => {
    const dataProduct = req.body;
    const product = new Product();
    product.insert(dataProduct, (error, result) => {
      if (error) throw error;
      res.json(dataProduct);
    });
  },

  index: (req, res) => {
    const product = new Product();
    product.findAll((error, products) => {
      if (error) throw error;
      res.json(products);
    });
  },

  edit: (req, res) => {
    const dataProduct = req.body;
    const productID = req.params.id;
    const product = new Product();
    product.update(productID, dataProduct, (error, result) => {
      if (error) throw error;
      res.json(dataProduct);
    });
  },

  show: (req, res) => {
    const productID = req.params.id;
    const product = new Product();
    product.findById(productID, (error, product) => {
      if (error) throw error;
      res.json(product);
    });
  }
};
