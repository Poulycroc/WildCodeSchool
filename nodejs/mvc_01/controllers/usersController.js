const User = require("../models/User");

const index = function(req, res) {
  const user = new User();
  user.all((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const create = function(req, res) {
  const newUser = req.body;
  const user = new User();
  user.createUser(newUser, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  index,
  create
};
