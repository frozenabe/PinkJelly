const requestImageSize = require('request-image-size');

const getImageSize = (url) =>
  requestImageSize(url)
    .then(size => {
      const imageSize = {
        height: size.height,
        width: size.width,
      }
      
      return imageSize;
    })
    .catch(err => console.log(err));

module.exports = getImageSize;