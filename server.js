'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));

module.exports = app;