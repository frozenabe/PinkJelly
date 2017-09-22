const beautifyData = (data) => {
  data = data.replace(/]|\[|\n|,/g, '');
  data = data.split(' ');

  let labelData = {};

  if (data.length === 6) {
    labelData = {
      label: `${data[0]} ${data[1]}`,
      top: parseInt(data[2]),
      right: parseInt(data[3]),
      bottom: parseInt(data[4]),
      left: parseInt(data[5]),
    }
  } else {
    labelData = {
      label: `${data[0]}`,
      top: parseInt(data[1]),
      right: parseInt(data[2]),
      bottom: parseInt(data[3]),
      left: parseInt(data[4]),
    }
  }

  return labelData;
};

module.exports = beautifyData;