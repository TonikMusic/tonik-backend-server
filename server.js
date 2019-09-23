'use strict';
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const auth = require('./app/routes/auth');
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

auth(app)

require("./db-config");
app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));

module.exports = app;