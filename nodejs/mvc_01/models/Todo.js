const Model = require('./Model')

function Todo() {
  Model.call(this, {
    tableName: 'todos'
  })
  this.state.status = 0
}

Todo.prototype = Object.create(Model.prototype)
Todo.prototype.constructor = Model

module.exports = Todo