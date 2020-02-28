const express = require("express");
const router = express.Router();
const todoController = require("../controllers/TodoController");

router.get("/todo", todoController.index);
router.post("/todo", todoController.add);

module.exports = router;
