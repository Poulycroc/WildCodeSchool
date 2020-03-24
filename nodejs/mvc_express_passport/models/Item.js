// call the model

const Model = require('./Model')

// create var including 
// model values (.call) + specific values for this table

function Item() {
  Model.call(this, {
    tableName: 'item'
  })  
}

// extend from model

User.prototype = Object.create(Model.prototype)
User.prototype.constructor = Model

module.exports = Item

// => itemControllers.js