const mysql = require("mysql");
const databaseName = "firstdatabase_wildcodeschool";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: databaseName
});

con.connect(function(err) {
  if (err) throw err;
  console.log("database connected");

  const tableName = "users"
  const params = [
    "id INT AUTO_INCREMENT PRIMARY KEY",
    "name VARCHAR(255)",
    "address VARCHAR(255)"
  ];
  createTable(tableName, params)
});

const createTable = function(tableName, params) {
  const joinParams = params.join(", ")
  const sql = `CREATE TABLE ${tableName} (${joinParams})`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(`Table ${tableName} created`);
    console.log({ result })
  });
}
