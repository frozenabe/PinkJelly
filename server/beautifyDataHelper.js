const beautifyDataHelper = (eachNewData, length, height, width) => {
  let label;
  switch (length) {
    case 5:
      label = `${eachNewData[0]}`;
      break;
    case 6:
      label = `${eachNewData[0]} ${eachNewData[1]}`;
      break;
    case 7:
      label = `${eachNewData[0]} ${eachNewData[1]} ${eachNewData[2]}`;
      break;
    case 8:
      label = `${eachNewData[0]} ${eachNewData[1]} ${eachNewData[2]} ${eachNewData[3]}`;
      break;
    case 9:
      label = `${eachNewData[0]} ${eachNewData[1]} ${eachNewData[2]} ${eachNewData[3]} ${eachNewData[4]}`;
      break;
    case 10:
      label = `${eachNewData[0]} ${eachNewData[1]} ${eachNewData[2]} ${eachNewData[3]} ${eachNewData[4]} ${eachNewData[5]}`;
      break;
    default:
      label = 'invalid data length given during beautifyDataHelper';
  }

  const dataPosition = [
    parseInt(eachNewData[length - 4]), 
    parseInt(eachNewData[length - 3]), 
    parseInt(eachNewData[length - 2]), 
    parseInt(eachNewData[length - 1])
  ];

  const [ left, top, right, bottom ] = dataPosition;

  const xCoordinate = Math.floor((right - left) / 2 + left);
  const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
 
  const labelData = {
    label,
    x: xCoordinate,
    y: yCoordinate,
    height,
    width,
  };

  return labelData;
};

module.exports = beautifyDataHelper;