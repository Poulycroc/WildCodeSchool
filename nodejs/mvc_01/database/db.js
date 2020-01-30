const mysql = require('mysql')
const databaseName = 'todolist_mvc__wcs'

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: databaseName
})

module.exports = con