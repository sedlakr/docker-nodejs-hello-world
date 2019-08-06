'use strict';

const random = require("./random");
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const intanceRandomNumber = random.makeid(7);

// App
const app = express();
app.get('/', (req, res) => {
    let headers = req.headers;
    res.send(`Hello world: #${intanceRandomNumber}<br/>
        Date: ${new Date()}<br/>
        <table>
        ${
            Object.keys(headers).map(key => `<tr><td>${key}</td><td>${headers[key]}</td></tr>`)
        }
         </table>
    `
    );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
