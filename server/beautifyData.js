const beautifyDataHelper = require('./beautifyDataHelper');

const beautifyData = (data, imageSize) => {
  data = data.replace(/]|\[|,/g, '');
  data = data.split('\n');
  data.pop();

  const newData = [];
  data.forEach(eachData => {
    eachData = eachData.split(' ');
    eachData.pop();
    newData.push(eachData);
  });

  const { height, width } = imageSize;
  const beautifiedData = [];
  
  newData.forEach(eachNewData => {
    eachNewData.length >= 5 && eachNewData.length <= 10
      ? beautifiedData.push(beautifyDataHelper(eachNewData, eachNewData.length, height, width))
      : console.log('either an invalid data or object was not detected');
  });

  return beautifiedData;
};

module.exports = beautifyData;