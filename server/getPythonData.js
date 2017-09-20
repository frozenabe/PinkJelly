const { spawn } = require('child_process');
const beautifyData = require('./beautifyData');

const processThruPython = (url) => 
  new Promise((resolve, reject) => {
  
    const py = spawn('python', [
      'run_yolo.py',
      'model_data/yolo.h5'
    ]);

    const pythonOutput = [];
    py.stdout.on('data', (data) => {
      pythonOutput.push(beautifyData(data.toString('utf8')));
    });

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

    // py.on('close', (code) => { 
    //   resolve(pythonOutput);
    //   reject(code);
    // })

})

module.exports = processThruPython;