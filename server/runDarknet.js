require('dotenv').config();
const { exec } = require('child_process');
const path = require('path');
const downloadS3 = require('./downloadS3');
const beautifyData = require('./beautifyData');
const getImageSize = require('./getImageSize');

const runDarknet = (userEmail) => 
  new Promise((resolve, reject) => {
    
    const imageUrlS3 = `${process.env.AWS_S3_BUCKET_IMAGE_URL}/${userEmail}-image.jpg`;
    downloadS3(imageUrlS3, `./darknet/${userEmail}-super.jpg`, () => console.log('download complete'));
    
    getImageSize(imageUrlS3)
    .then((imageSize) => {

      const dark = exec(`./darknet detector test cfg/combine9k.data cfg/yolo9000.cfg yolo9000.weights ${userEmail}-super.jpg`, {
        cwd: path.join(__dirname, './darknet'),
      });

      let labelData
      dark.stdout.on('data', (data) => {
        labelData = beautifyData(data.toString('utf8'), imageSize);
      }).on('end', () => {
        resolve(labelData);
        reject('stdout was rejected')
      });

      //// ****catches tensorflow backend err, uncomment when trying to findout python err*****
      // dark.stderr.on('data', (data) => {
      //   console.log(`stderr: ${data}`);
      // })
    });
  });

module.exports = runDarknet;
