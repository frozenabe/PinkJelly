const fs = require('fs');
const request = require('request');

const downloadS3 = (uri, filename, callback) => {
  request.head(uri, err => {
    if (err) {
      console.log('download had an error');
    }
    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = downloadS3;
