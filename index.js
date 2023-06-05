'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const stamper = require('./src/middlewares/stamper.js');
const errorHandler = require('./src/errorHandlers/500.js');
const notFoundHandler = require('./src/errorHandlers/404.js');

app.get('/', async (req, res) => {
    res.send('Hello from home page route');
});

app.get('/about', stamper, (req, res) => {
    res.send({
        "name": "Sara",
        "age": 25,
        "jobe": "student",
        "time": req.stamper
    });
});

app.get('/bad', async (req, res) => {
    let num = [1, 2, 3, 4, 5];
    num.forEach((x) => {
        console.log(x);
    });
    res.send(num);
});

app.use('*', notFoundHandler);
app.use(errorHandler);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = {
    app: app,
    close: function () {
        server.close();
    }
};
