const TodoModel = require('../models/todo.model');


class TodoController {
    async index(req, res) {
        const todos = await TodoModel.find();
        res.send({ todos })
    }

    async store(req, res) {
        const data = req.body;
        const todo = TodoModel.create(data);

        res.send({ todo });
    }

    async getOne(req, res) {
        const { id } = req.params;

        try {
            const todo = await TodoModel.findById(id);
            res.send({ todo })
        } catch (e) {
            res.status(400).send({ message: "Todo not exists" })
        }
    }

    async remove(req, res) {
        const { id } = req.params;

        try {
            const todo = await TodoModel.findByIdAndDelete(id);
            if (todo) {
                res.send({ message: "Todo removed" })
            } else {
                throw new Error("Todo not exists")
            }

        } catch (e) {
            res.status(400).send({ message: "Todo not exists" })
        }

    }

    async update(req, res) {
        const { params: { id }, body } = req;

        try {
            const todo = await TodoModel.findOneAndUpdate(id, body).lean()
            res.send({
                data: {
                    ...todo,
                    ...body,
                },
            })
        } catch (e) {
            res.status(400).send({ message: "Todo cannot be update" })
        }
    }
}

module.exports = new TodoController()