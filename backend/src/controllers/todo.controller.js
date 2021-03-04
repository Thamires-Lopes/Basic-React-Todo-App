const TodoModel = require('../models/todo.model');


class TodoController {
    async index(req, res) {
        const todos = await TodoModel.find();
        res.send({ todos })
    }
}

module.exports = new TodoController()