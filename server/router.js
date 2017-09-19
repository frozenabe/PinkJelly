require('dotenv').config();
const router = require('express').Router();
const processThruPython = require('./getPythonData')

router.get('/', (req, res) => {
  processThruPython(process.env.AWS_S3_BUCKET_IMAGE_URL)
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

module.exports = router;