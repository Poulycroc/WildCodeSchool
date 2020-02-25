// call the model

const Model = require('./Model')

// create var including 
// model values (.call) + specific values for this table

function User() {
  Model.call(this, {
    tableName: 'user'
  })
  this.state.email = 'wild@mail.com'
  
}

// extend from model

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model


// const linkTableUserID = function () {
//   const sql = `SELECT user.id FROM user RIGHT JOIN basket ON user.id = basket.user_id`;
//   con.query(sql, function (err, response) {
//     if (err) throw err;
//     response.json(response);
//   });
// }

// linkTableUserID()
// const otherTable = 'basket';
// const otherTableColumn = 'user_id';


// const linkTableUserID = function(req, res) {
//   const user = new User();
//   user.linkTable(otherTable, otherTableColumn, (err, response) => {
//     if (err) throw err;
//     res.json(response);
//     console.log(res)
//   });
// };

// linkTableUserID()

///////////////////////////////////////////////////////////////////

// controller to check if name is define

// User.prototype.createUser = function (data, callback) {
//   if (data.firstname === undefined) {
//     return console.log('pas de nom')
//   }
//   this.insert(data, callback)
// }

///////////////////////////////////////////////////////////////////

module.exports = User

// => usersControllers.js