const googleTTS = require('google-tts-api');

googleTTS('chair', 'en', 1)   // speed normal = 1 (default), slow = 0.24
  .then(function (url) {
    console.log(url); // https://translate.google.com/translate_tts?...
  })
  .catch(function (err) {
    console.error(err.stack);
  });

// add react-player to play the url