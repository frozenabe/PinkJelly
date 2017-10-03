require('dotenv').config();
const fs = require('fs');
const request = require('request');

const downloadS3 = (uri, filename, callback) => {
  if (!uri.includes(process.env.AWS_S3_BUCKET_IMAGE_URL)) {
    return 'downloadS3 invalid uri';
  } 
  if (!filename.includes('./darknet/')) {
    return 'downloadS3 invalid filename';
  }

  request.head(uri, (err) => {
    if (err) {
      console.log('download failed');
    }
    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = downloadS3;
