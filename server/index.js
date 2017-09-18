const app = require('./server.js');

const SERVER_URL = 'ec2-13-124-232-5.ap-northeast-2.compute.amazonaws.com';

app.listen(SERVER_URL, () => {
  console.log('Connected');
});
