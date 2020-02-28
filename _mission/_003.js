const tables = {
  users: {
    id: true,
    timestamp: true,
    email: ["string", "notnull", "unique"],
    password: ["string", "notnull"]
  },
  address: {
    id: ['bigint', 'primary'],
    timestamp: false,
    street: ["string", "notnull"]
  }
};

const options = {
  notnull: "NOT NULL",
  string: "VARCHAR(255)",
  primary: "AUTO_INCREMENT PRIMARY KEY",
  bigint: 'BIGINT'
};

const base = {
  id: "id INT AUTO_INCREMENT PRIMARY KEY",
  timestamp: "created_at DATE NOT NULL, updated_at DATE NOT NULL"
};

const generateTable = function() {
  const params = [];

  Object.keys(tables).forEach(tableName => {
    const table = tables[tableName];

    Object.keys(table).forEach(item => {
      const colName = table[item];
      if (colName === undefined) return
      if (typeof colName === "boolean") {
        if (!colName) return;
        params.push(base[item]);
      }
      if (Array.isArray(colName)) {
        const mapItemOptions = [];
        colName.forEach(key => mapItemOptions.push(options[key]));
        params.push(`${item} ${mapItemOptions.join(" ")}`);
      }
    });
  });

  addTable(tableName, params)
};

const addTable = function(tableName, params) {
  const joinParams = params.join(", ");
  const sql = `CREATE TABLE ${tableName} (${joinParams})`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(`Table ${tableName} created`);
    console.log({ result });
  });
};


