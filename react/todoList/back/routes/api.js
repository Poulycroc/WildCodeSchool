const { Router } = require("express");
const router = Router();

const todosController = require('../controllers/todosController')

router.get('/todos', todosController.index)
router.post('/todos', todosController.create)
router.delete('/todos/:id', todosController.destroy)

module.exports = router