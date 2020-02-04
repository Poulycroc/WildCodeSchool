const express = require("express");
const app = express();
const router = express.Router();

const todosController = require('./controllers/todosController.js')


router.get('/todos', todosController.index)
router.get("/todos/:id", todosController.show)
router.post('/todos', todosController.create)
router.post('/todos/update/:id', todosController.update)


app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(4545, () => {
    console.log("Example app listening on port 4545!");
});