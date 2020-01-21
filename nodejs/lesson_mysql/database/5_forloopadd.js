const mysql = require("mysql");
const databaseName = "firstdatabase_wildcodeschool";
const tableName = "users";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: databaseName
});

const allUsers = [
  {
    name: "Anakin Skywalker",
    address: "Tatooine"
  },
  {
    name: "Padmé Amidala",
    address: "Naboo"
  }
];

con.connect(function(err) {
  if (err) throw err;
  console.log("database connected");

  addAllUser(allUsers);
});

const addAllUser = function(users) {
  const sql = `INSERT INTO ${tableName} SET ?`;
  users.forEach((user) => {
    con.query(sql, user, (err, result) => {
      if (err) console.log({ err })
      console.log({ result })
    });
  });
};
