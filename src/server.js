'use strict';

const random = require("./random");
const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

const intanceRandomNumber = random.makeid(7);

// App
const app = express();
app.get('/', (req, res) => {
    res.send(`Hello world: #${intanceRandomNumber}<br/>Date: ${new Date()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);