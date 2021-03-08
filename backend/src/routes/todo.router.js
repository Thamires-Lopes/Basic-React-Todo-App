const { Router } = require('express');
const TodoController = require('../controllers/todo.controller');

const router = Router();

router.get("/todo", TodoController.index);
router.post("/todo", TodoController.store);
router.get("/todo/:id", TodoController.getOne);
router.post("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.remove);

module.exports = router