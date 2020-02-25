// 1 // create connexion to database

//////  link to env.js for database info + mysql download 

const mysql = require('mysql');
const env = require('.././env/env')


const con = mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  port: env.DATABASE_PORT
});

module.exports = con

// => 2 createtables