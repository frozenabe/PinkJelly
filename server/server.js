const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Create the Express application:
const app = express();

// Attach middleware:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.post('/', (req, res) => {

});















module.exports = app;
