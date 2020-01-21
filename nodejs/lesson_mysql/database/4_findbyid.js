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

  findUserByID(1)
});

const findUserByID = function(userID) {
  const sql = "SELECT * FROM users WHERE id = ? ";
  con.query(sql, userID, function(err, response) {
    if (err) console.log({ err })
    console.log({ response })
  });
}
