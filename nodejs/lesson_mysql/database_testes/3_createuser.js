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

  createUser(1)
});

const createUser = function(newUser) {
  const sql = "INSERT INTO users (name, address) VALUES ('Jhon Doe', 'Brussels')"
  con.query(sql, newUser, function(err, response) {
    if (err) console.log({ err })
    console.log({ response })
  });
}
