const tableName = 'todos'

con.connect(function(err) {
  if (err) throw err;
  console.log("database connected");

  const params = [
    "id INT AUTO_INCREMENT PRIMARY KEY",
    "name VARCHAR(255) NOT NULL",
    "description TEXT",
    "status INT"
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