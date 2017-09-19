const { spawn } = require('child_process');
const py = spawn('python', [
  'run_yolo.py',
  'model_data/yolo.h5'
]);

const processThruPython = (url) => 
  new Promise((resolve, reject) => {

    const imageFromClient = JSON.stringify(url);
    py.stdin.write(imageFromClient);
    py.stdin.end();

    let loopedPythonOutput = '';
    py.stdout.on('data', (data) => {
      loopedPythonOutput += data.toString('utf8');
    });

    // py.stderr.on('data', (data) => { 
    //   console.log(`stderr: ${data}`);
    // }); //****having issue with tensorflow backend err*****

    py.on('close', (code) => {
      resolve(loopedPythonOutput);
      reject(code);
    })

})

module.exports = processThruPython;