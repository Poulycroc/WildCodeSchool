const con = require('../database/db.js');
const todo = require('./TodoDAO');
const tableName = 'todos';
const dod = new Date();

const all = function(callback) {
    const sql = "SELECT * FROM " + tableName
    con.query(sql, callback)
}

const findById = function(id, callback) {
    const sql = 'SELECT * FROM todos WHERE id = ?';
    con.query(sql, id, callback)
}

const createToDo = function(task, callback) {
    const taskToInsert = new todo(task);
    const sql = "INSERT INTO todos SET ?"
    con.query(sql, taskToInsert, callback)
}

const updateToDo = function(id, task, callback) {
    //find creation date
    const sql = 'SELECT createdat FROM todos WHERE id = ?';
    con.query(sql, id, function(error, results, fields) {
        //update the updatedat column
        const taskToInsert = new todo(task);
        taskToInsert.setUpdatedAt(dod);
        taskToInsert.setCreatedAt(results[0].createdat);
        console.log({ taskToInsert: taskToInsert });
        //const sql = `UPDATE todos SET ? WHERE id=(${id})`;
        const sql = `UPDATE todos SET ? WHERE id=?`;
        con.query(sql, [taskToInsert, id], callback);
    });



}

module.exports = {
    all,
    findById,
    createToDo,
    updateToDo
}