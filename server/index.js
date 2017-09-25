require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(port, () => console.log(`server listen ${port}`));

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> c18f580456f331c2fcbdb927a796704664d7cf18
