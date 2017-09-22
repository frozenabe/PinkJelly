const { spawn } = require('child_process');
const beautifyData = require('./beautifyData');

const processThruPython = (url) =>
  new Promise((resolve, reject) => {

    const py = spawn('python', [
      'python_yolo/run_yolo.py',
      'python_yolo/model_data/yolo.h5'
    ]);

    // recieve url from client and stdin.write to python run_yolo.py
    const imageFromClient = JSON.stringify(url);
    py.stdin.write(imageFromClient);
    py.stdin.end();

    // get outcome from run_yolo.py and send back data to client thru router.js
    const pythonOutput = [];
    py.stdout.on('data', (data) => {
      const labelData = beautifyData(data.toString('utf8'));
      pythonOutput.push(labelData);
    });
    py.stdout.on('end', function(){
      console.log(pythonOutput)
      resolve(pythonOutput);
      reject('stdout malfunction');
    });

    // py.stderr.on('data', (data) => {
    //   console.log(`stderr: ${data}`);
    // }); //****having issue with tensorflow backend err*****

})

module.exports = processThruPython;
