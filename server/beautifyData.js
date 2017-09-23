const beautifyData = (data, imageSize) => {
  const { 
    height,
    width,
  } = imageSize;
  let labelData = {};

  data = data.replace(/]|\[|\n|,/g, '');
  data = data.split(' ');

  if (data.length === 6) {
    const left = parseInt(data[2]);
    const top = parseInt(data[3]);
    const right = parseInt(data[4]);
    const bottom = parseInt(data[5]);

    const xCoordinate = Math.floor((right - left) / 2 + left);
    const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
    
    labelData = {
      label: `${data[0]} ${data[1]}`,
      x: xCoordinate,
      y: yCoordinate,
      height,
      width,
    }
  } else {
    const left = parseInt(data[1]);
    const top = parseInt(data[2]);
    const right = parseInt(data[3]);
    const bottom = parseInt(data[4]);

    const xCoordinate = Math.floor((right - left) / 2 + left);
    const yCoordinate = Math.floor((top - bottom) / 2 + bottom);

    labelData = {
      label: data[0],
      x: xCoordinate,
      y: yCoordinate,
      height,
      width,
    }
  };

  return labelData;
};

module.exports = beautifyData;