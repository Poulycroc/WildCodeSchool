// call the model

const Model = require('./Model')

// create var including 
// model values (.call) + specific values for this table

function Address() {
  Model.call(this, {
    tableName: 'address'
  })  
}

// extend from model

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model

module.exports = Address

// => AddressControllers.js