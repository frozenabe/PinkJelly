const { spawn } = require('child_process');
const beautifyData = require('./beautifyData');
const getImageSize = require('./getImageSize')

const getPythonData = (url) =>
  new Promise((resolve, reject) => {
    getImageSize(url)
      .then((imageSize) => {

        // python version needs to be 3.6.X or above
        const py = spawn('python3', [
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
        }).on('end', () => {
          resolve(pythonOutput);
          reject('stdout malfunction');
        });
        
        //// ****catches tensorflow backend err, uncomment when trying to findout python err*****
        // py.stderr.on('data', (data) => {
        //   console.log(`stderr: ${data}`);
        // }); 
      });
  });

module.exports = getPythonData;