const beautifyData = (data) => {
  data = data.replace(/]|\[|\n|,/g, '');
  data = data.split(' ');

  let labelData = {};
  
  if (data.length === 6) {
    const xCoordinate = (parseInt(data[4]) - parseInt(data[2])) / 2 + parseInt(data[2]);
    const yCoordinate = (parseInt(data[3]) - parseInt(data[5])) / 2 + parseInt(data[5]);
    
    labelData = {
      label: `${data[0]} ${data[1]}`,
      x: xCoordinate,
      y: yCoordinate,
    }
  } else {
    const xCoordinate = (parseInt(data[3]) - parseInt(data[1])) / 2 + parseInt(data[1]);
    const yCoordinate = (parseInt(data[2]) - parseInt(data[4])) / 2 + parseInt(data[4]);

    labelData = {
      label: `${data[0]}`,
      x: xCoordinate,
      y: yCoordinate,
    }
  }

  return labelData;
};

module.exports = beautifyData;