const mysql = require('mysql')
const databaseName = 'firstdatabase_wildcodeschool'

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: databaseName
})

con.connect(function(err) {
  if (err) throw err
  console.log('database connected')
})