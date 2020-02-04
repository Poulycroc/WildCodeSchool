const mysql = require('mysql');
const tableName = 'users';
const env = require('./env')

const con = mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  port: env.DATABASE_PORT
});

con.connect(function (err) {
  if (err) throw err;
  console.log("database connected");

  const params = [
    "id INT AUTO_INCREMENT PRIMARY KEY",
    "firstname VARCHAR(255) NOT NULL",
    "lastname VARCHAR(255) NOT NULL",
    "email VARCHAR(255) NOT NULL",
    "created_at DATE NOT NULL",
    "updated_at DATE NOT NULL",
  ];
  createTable(tableName, params)
});

const createTable = function (tableName, params) {
  const joinParams = params.join(", ")
  const sql = `CREATE TABLE ${tableName} (${joinParams})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Table ${tableName} created`);
    console.log({ result })
  });
}