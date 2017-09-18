const spawn = require('child_process').spawn;

// send data to python with 2 arguments => (yolo, image)
const py = spawn('python', [
  'run_yolo.py',
  'model_data/yolo.h5']);

const doit = (url) => new Promise((resolve) => {
  // Write data (python understands either strings or numbers)
  const imageFromClient = JSON.stringify(url);
  py.stdin.write(imageFromClient);
  py.stdin.end();

  let thisIsOutput = '';

  // get data from python
  py.stdout.on('data', (data) => {
    // const renderedImageFromPython = data.toString('utf8')
    thisIsOutput += data.toString('utf8');
  });

  // // gets an error even without an error
  // py.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });

  // py.on('exit', code => console.log("done: " + code));
  py.on('exit', () => {
    resolve(thisIsOutput);
  });
});

module.exports = doit;