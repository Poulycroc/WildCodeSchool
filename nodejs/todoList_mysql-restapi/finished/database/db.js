const mysql = require('mysql');

//local mysql db connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todolist_nodejs_restapi'
});

db.connect(function(err) {
    if (err) console.log({ err })
});

module.exports = db;