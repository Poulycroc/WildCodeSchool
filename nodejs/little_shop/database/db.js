const mysql = require("mysql");
const env = require("../env");

const con = mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME
});

module.exports = con;
