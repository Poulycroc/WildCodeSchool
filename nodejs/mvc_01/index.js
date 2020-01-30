const express = require("express");
const mysql = require('mysql');
const app = express();
const router = express.Router();

const databaseName = 'todolist_mvc__wcs'
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: databaseName
})

router.get("/todos", (req, res) => {
  const sql = "SELECT * FROM todos"
  con.query(sql, function(err, response) {
    if (err) console.log({ err })
    console.log(response)
    res.json(response)
  });
});
router.get("/todos/:id", (req, res) => {
  const todoID = req.params.id
  const sql = 'SELECT * FROM todos WHERE id = ?';
  con.query(sql, todoID, function(err, response) {
    if (err) console.log({ err })
    console.log(response[0])
    res.json(response[0])
  });
});
router.post('/todos', (req, res) => {
  const newTodo = req.body;
  const sql = "INSERT INTO todos SET ?"
  con.query(sql, newTodo, function(err, response) {
    if (err) console.log({ err })
    console.log(response)
    res.json(response)
  });
})


app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});
