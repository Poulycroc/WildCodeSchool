// 2 // create tables

const tableName = 'item';
const con = require('../database/db')

// create controller + columns + launch in 1

con.connect(function (err) {
      if (err) throw err;
      console.log("database connected");

      // create columns 

      const params = [
        "id INT AUTO_INCREMENT PRIMARY KEY",
        "name VARCHAR(255) NOT NULL",
        "description VARCHAR(255) NOT NULL",
        "price INT NOT NULL",
        "created_at DATE NOT NULL",
        "updated_at DATE NOT NULL",
        "user_id INT NOT NULL",

      ];

      // launch the creations cf: const bellow, 
      // "const createTable" could be place here

      createTable(tableName, params)
});

const createTable = function (tableName, params) {
  const joinParams = params.join(", ")
  const sql = `CREATE TABLE ${tableName} (${joinParams})`;
  // create controller
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Table ${tableName} created`);
    console.log({ result })
  });
}

// no more link to other page
// next see => 3 Models.js