const beautifyData = (data, imageSize) => {
  data = data.replace(/]|\[|\n|,/g, '');
  data = data.split(' ');

  const { 
    height,
    width,
  } = imageSize;

  let labelData = {};

  if (data.length === 6) {
    const dataPosition = [
      parseInt(data[2]), 
      parseInt(data[3]), 
      parseInt(data[4]), 
      parseInt(data[5])
    ]
    const [left, top, right, bottom] = dataPosition;

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
    const dataPosition = [
      parseInt(data[1]), 
      parseInt(data[2]), 
      parseInt(data[3]), 
      parseInt(data[4])
    ]
    const [left, top, right, bottom] = dataPosition;

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