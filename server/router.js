require('dotenv').config();
const router = require('express').Router();
const processThruPython = require('./getPythonData');
const imageUrlS3 = process.env.AWS_S3_BUCKET_IMAGE_URL;

router.get('/', (req, res) => {
  processThruPython(imageUrlS3)
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
});

module.exports = router;