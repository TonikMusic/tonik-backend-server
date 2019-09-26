'use strict';
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const auth = require('./app/routes/auth');
const artist = require('./app/routes/artist');
const fan = require('./app/routes/fan');
//config .env 
require('dotenv').config()

//Register DB SChema
require('./app/models/fans');
require('./app/models/artist');
require('./app/models/albums');
require('./app/models/comments');
require('./app/models/post');
require('./app/models/song');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

auth(app);
artist(app);
fan(app)

require("./db-config");
app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));

module.exports = app;