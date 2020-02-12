const User = require("../models/User");

module.exports = {
  new: (req, res) => {
    const dataUser = req.body;
    const user = new User();
    user.checkInput(dataUser, (error, result) => {
      if (error) throw error;
      res.json(dataUser);
    });
  },

  index: (req, res) => {
    const user = new User();
    user.findAllUsersWithAddress((error, users) => {
      if (error) throw error;
      res.json(users);
    });
  },

  showByCart: (req, res) => {
    const userID = req.params.id;
    const user = new User();
    user.findCartByUser(userID, (error, user) => {
      if (error) throw error;
      res.json(user);
    });
  },

  show: (req, res) => {
    const userID = req.params.id;
    const user = new User();
    user.findById(userID, (error, user) => {
      if (error) throw error;
      res.json(user);
    });
  },

  edit: (req, res) => {
    const userID = req.params.id;
    const dataUser = req.body;
    const user = new User();
    user.update(userID, dataUser, (error, result) => {
      if (error) throw error;
      res.json(dataUser);
    });
  },

  destroy: (req, res) => {
    const userID = req.params.id;
    const user = new User();
    user.delete(userID, (error, result) => {
      if (error) throw error;
      res.json({ success: "User is deleted" });
    });
  }
};
