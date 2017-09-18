const express = require('express');
const bodyParser = require('body-parser');
const doit = require('./getPythonData')

const app = express();
const port = process.env.PORT || 7080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  doit('https://s3.ap-northeast-2.amazonaws.com/foxtailbucket/images/image.jpg')
    .then(data => res.send(data));
});

app.listen(port, () => console.log(`server listen ${port}`));