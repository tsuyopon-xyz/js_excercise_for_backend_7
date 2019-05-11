const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/comments');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/comments', router);

module.exports = app;
