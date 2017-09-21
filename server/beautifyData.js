const beautifyData = (data) => {
  data = data.replace(/]/g, '');
  data = data.replace(/\[/g, '');
  data = data.replace(/\n/g, '');
  data = data.replace(/,/g, '');
  data = data.split(' ');

  let obj = {};

  if (data.length === 6) {
    obj = {
      label: `${data[0]} ${data[1]}`,
      top: parseInt(data[2]),
      right: parseInt(data[3]),
      bottom: parseInt(data[4]),
      left: parseInt(data[5]),
    }
  } else {
    obj = {
      label: data[0],
      top: parseInt(data[1]),
      right: parseInt(data[2]),
      bottom: parseInt(data[3]),
      left: parseInt(data[4]),
    }
  }

  return obj;
};

module.exports = beautifyData;