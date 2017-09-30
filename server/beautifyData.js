const beautifyData = (data, imageSize) => {
  // data = data.replace(/]|\[|\n|,/g, '');
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
  let labelData = {};
  const resultArray = [];

  for (let i = 0; i < newData.length; i += 1) {
    if (newData[i].length === 5) {
      const dataPosition = [
        parseInt(newData[i][1]), 
        parseInt(newData[i][2]), 
        parseInt(newData[i][3]), 
        parseInt(newData[i][4])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    } else if (newData[i].length === 6) {
      const dataPosition = [
        parseInt(newData[i][2]), 
        parseInt(newData[i][3]), 
        parseInt(newData[i][4]), 
        parseInt(newData[i][5])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]} ${newData[i][1]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    } else if (newData[i].length === 7) {
      const dataPosition = [
        parseInt(newData[i][3]), 
        parseInt(newData[i][4]), 
        parseInt(newData[i][5]), 
        parseInt(newData[i][6])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]} ${newData[i][1]} ${newData[i][2]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    } else if (newData[i].length === 8) {
      const dataPosition = [
        parseInt(newData[i][4]), 
        parseInt(newData[i][5]), 
        parseInt(newData[i][6]), 
        parseInt(newData[i][7])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]} ${newData[i][1]} ${newData[i][2]} ${newData[i][3]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    } else if (newData[i].length === 9) {
      const dataPosition = [
        parseInt(newData[i][5]), 
        parseInt(newData[i][6]), 
        parseInt(newData[i][7]), 
        parseInt(newData[i][8])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]} ${newData[i][1]} ${newData[i][2]} ${newData[i][3]} ${newData[i][4]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    } else if (newData[i].length === 10) {
      const dataPosition = [
        parseInt(newData[i][6]), 
        parseInt(newData[i][7]), 
        parseInt(newData[i][8]), 
        parseInt(newData[i][9])
      ]
      const [ left, top, right, bottom ] = dataPosition;
  
      const xCoordinate = Math.floor((right - left) / 2 + left);
      const yCoordinate = Math.floor((top - bottom) / 2 + bottom);
      
      labelData = {
        label: `${newData[i][0]} ${newData[i][1]} ${newData[i][2]} ${newData[i][3]} ${newData[i][4]} ${newData[i][5]}`,
        x: xCoordinate,
        y: yCoordinate,
        height,
        width,
      }

      resultArray.push(labelData);
    }
  }
  
  
  return resultArray;
};

module.exports = beautifyData;