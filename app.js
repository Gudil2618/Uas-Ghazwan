const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

// convert data to json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes');
app.use('/', appRoute);

app.listen(process.env.APP_PORT, () => {
    console.log(`server berjalan di http://localhost:${process.env.APP_PORT}`)
});