const { exec } = require('child_process');
const path = require('path');
const beautifyData = require('./beautifyData');
const getImageSize = require('./getImageSize')

const runDarknet = (cache) => 
  new Promise((resolve, reject) => {
    getImageSize(cache)
    .then((imageSize) => {
      const dark = exec(`./darknet detector test cfg/combine9k.data cfg/yolo9000.cfg yolo9000.weights ${cache}`, {
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