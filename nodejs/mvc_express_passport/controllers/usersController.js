// 4 // create controllers for sql actions

// call actions

const User = require("../models/User");

// create controller for each action

const showAll = function(req, res) {
  const user = new User();
  user.selectAll((err, response) => {
    if (err) throw err;
    res.json(response);
  });
};

const createUser = function(req, res) {
  const newUser = req.body;
  const user = new User();
  user.insert(newUser, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
};

const showUser = (req, res) => {
  const user = new User();
  // request id in url
  const userID = req.params.id
  user.findById(userID, (err, response) => {
    if (err) throw err
    res.json(response[0])
  });
};

const updateUser = function(req, res) {
  const user = new User();
  const updateValuesUser = req.body;
  const userID = req.params.id;
  // related to (data, id, callback) from model "update" (see bellow)
  user.update(updateValuesUser, userID, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
};
  // respect the order of values!!!!!!!!
  // model:     UPDATE ${this.tableName} SET ? WHERE id = ?
  // translate: UPDATE ${this.tableName} SET ${updateValuesUser} WHERE id = ${userID}`
  // so here :  (updateValuesUser, userID, (err, response))
  // not:       (userID, updateValuesUser, (err, response))
  // or for computer: {updateValuesUser} = userID and ${userID} = updateValuesUser


const deleteUser = function(req, res) {
  const user = new User();
  const userID = req.params.id;
  user.delete(userID, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
};


module.exports = {
  showAll,
  createUser,
  showUser,
  updateUser,
  deleteUser
};

// => index.js
