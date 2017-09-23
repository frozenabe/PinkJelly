const { spawn } = require('child_process');
const beautifyData = require('./beautifyData');
const getImageSize = require('./getImageSize')

const getPythonData = (url) =>
  new Promise((resolve, reject) => {
    getImageSize(url)
      .then((imageSize) => {
        const py = spawn('python', [
          'python_yolo/run_yolo.py',
          'python_yolo/model_data/yolo.h5'
        ]);
    
        const imageFromClient = JSON.stringify(url);
        py.stdin.write(imageFromClient);
        py.stdin.end();
    
        const pythonOutput = [];
        py.stdout.on('data', (data) => {
          const labelData = beautifyData(data.toString('utf8'), imageSize);
          pythonOutput.push(labelData);
        }).on('end', function(){
          console.log(pythonOutput)
          resolve(pythonOutput);
          reject('stdout malfunction');
        });
    
        // py.stderr.on('data', (data) => {
        //   console.log(`stderr: ${data}`);
        // }); //****having issue with tensorflow backend err*****
      });
  });

module.exports = getPythonData;
