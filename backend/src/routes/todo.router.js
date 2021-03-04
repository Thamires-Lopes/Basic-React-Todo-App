const { Router } = require('express');
const TodoController = require('../controllers/todo.controller');

const router = Router();

router.get('/todo', TodoController.index)

module.exports = router