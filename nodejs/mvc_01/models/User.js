const Model = require('./Model')

function User() {
  Model.call(this, {
    tableName: 'users'
  })
  this.state.email = 'wild@mail.com'
}

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model

User.prototype.createUser = function (data, callback) {
  if (data.firstname === undefined) {
    return console.log('pas de nom')
  }
  this.insert(data, callback)
}

module.exports = User