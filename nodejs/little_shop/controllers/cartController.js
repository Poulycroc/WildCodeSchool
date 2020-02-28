const Cart = require("../models/Cart");

module.exports = {
  new: (req, res) => {
    const dataCart = req.body;
    const cart = new Cart();
    cart.insert(dataCart, (error, result) => {
      if (error) throw error;
      res.json(dataCart);
    });
  },

  index: (req, res) => {
    const cart = new Cart();
    cart.findAll((error, carts) => {
      if (error) throw error;
      res.json(carts);
    });
  },

  destroy: (req, res) => {
    const cartID = req.params.id;
    const cart = new Cart();
    cart.delete(cartID, (error, result) => {
      if (error) throw error;
      res.json({ success: "Cart is deleted" });
    });
  }
};
