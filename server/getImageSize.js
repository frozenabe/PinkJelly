const requestImageSize = require('request-image-size');

const getImageSize = (url) =>
  requestImageSize(url)
    .then(size => {
      let imageSize = {};
      imageSize = {
        height: size.height,
        width: size.width,
      }
      return imageSize;
    });

module.exports = getImageSize;