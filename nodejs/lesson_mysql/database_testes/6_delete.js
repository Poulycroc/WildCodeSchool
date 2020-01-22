const mysql = require("mysql");
const databaseName = "firstdatabase_wildcodeschool";
const tableName = "users";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: databaseName
});

con.connect(function(err) {
  if (err) throw err;
  console.log("database connected");

  deleteUser(1)
});

const deleteUser = function(userID) {
  var sql = `DELETE FROM ${tableName} WHERE id = ? `;
  con.query(sql, userID, function (err, result) {
    if (err) throw err;
    console.log("User deleted");
    console.log({ result })
  });
}
