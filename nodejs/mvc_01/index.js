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

router.get("/", (req, res) => {
  res.send('My blog app');
});
router.get("/todos", (req, res) => {
  res.json({ todos: array });
});
router.get("/todos/:id", (req, res) => {
  const id = req.params.id
  let result = null
  for (let i; i < array.length; i++) {
    if (array[i].id === id) {
      console.log('rest')
      result = array[i]
    }
  }

  if (result === null) {
    res.status(404).json({ error: 'post not found' });
  } else {
    res.json({ result });
  }
});
router.post('/todos', (req, res) => {
  const formInputs = req.body;
  console.log({ formInputs })
  // save it to db
  res.send('New trip saved successfully!')
})


app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});
