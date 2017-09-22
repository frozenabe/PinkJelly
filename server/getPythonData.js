const { spawn } = require('child_process');
const beautifyData = require('./beautifyData');

const processThruPython = (url) =>
  new Promise((resolve, reject) => {

    const py = spawn('python', [
      'python_yolo/run_yolo.py',
      'python_yolo/model_data/yolo.h5'
    ]);

    const pythonOutput = [];
    py.stdout.on('data', (data) => {
      const labelData = beautifyData(data.toString('utf8'));
      pythonOutput.push(labelData);
    });
    py.stdout.on('end', function(){
      resolve(pythonOutput);
      reject('eh');
    });

    const imageFromClient = JSON.stringify(url);
    py.stdin.write(imageFromClient);
    py.stdin.end();

    py.stdout.on('end', function(){
      resolve(pythonOutput);
      reject('eh');
    });

    const imageFromClient = JSON.stringify(url);
    py.stdin.write(imageFromClient);
    py.stdin.end();

    // py.stderr.on('data', (data) => {
    //   console.log(`stderr: ${data}`);
    // }); //****having issue with tensorflow backend err*****

})

module.exports = processThruPython;
