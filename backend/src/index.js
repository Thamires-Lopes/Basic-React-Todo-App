const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const TodoRouter = require('./routes/todo.router');

const { HTTP_PORT, MONGO_URL } = process.env

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to mongoDB')
});

const app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.json({ message: "Hello World!" })
})

app.use('/api', TodoRouter);

app.listen(HTTP_PORT, () => {
    console.log(`Rodando na porta ${HTTP_PORT}`);
})