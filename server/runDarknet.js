const { exec } = require('child_process');
const path = require('path');
const beautifyData = require('./beautifyData');
const getImageSize = require('./getImageSize');
const fs = require('fs');
const request = require('request');

const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const runDarknet = (userEmail, imageUrlS3) => 
  new Promise((resolve, reject) => {
    download(imageUrlS3, `./darknet/${userEmail}-super.jpg`, () => console.log('done'));
    getImageSize(imageUrlS3)
    .then((imageSize) => {

      const dark = exec(`./darknet detector test cfg/combine9k.data cfg/yolo9000.cfg yolo9000.weights ${userEmail}-super.jpg`, {
        cwd: path.join(__dirname, './darknet'),
      });
      
      let labelData
      dark.stdout.on('data', (data) => {
        console.log(data.toString('utf8'))
        labelData = beautifyData(data.toString('utf8'), imageSize);
        
      }).on('end', () => {
        console.log(labelData)
        resolve(labelData);
        reject('eg')
      });
      
      //// ****catches tensorflow backend err, uncomment when trying to findout python err*****
      dark.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
      })
    })
  })
  
module.exports = runDarknet;