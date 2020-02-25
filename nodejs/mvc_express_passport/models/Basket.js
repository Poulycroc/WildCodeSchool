// call the model

const Model = require('./Model')

// create var including 
// model values (.call) + specific values for this table

function Basket() {
  Model.call(this, {
    tableName: 'basket'
  })  
}

// extend from model

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model

module.exports = Basket

// => basketControllers.js