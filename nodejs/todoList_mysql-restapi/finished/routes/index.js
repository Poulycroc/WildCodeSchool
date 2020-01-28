const express = require("express");

const todoList = require('../controllers/TodoListController')

module.exports = function(app) {
    app.route('/tasks')
        .get(todoList.index)
        .post(todoList.create)

    app.route('/tasks/:id')
        .get(todoList.show)
        .put(todoList.update)
        .delete(todoList.delete)
}