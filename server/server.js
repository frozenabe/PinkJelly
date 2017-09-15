const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const darknet = require('@moovel/yolo');

// Create the Express application:
const app = express();

// Attach middleware:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));


app.post('/', (req, res) => {

  darknet.detectImage({
    cfg: './cfg/yolo.cfg',
    weights: './yolo.weights',
    data: './cfg/coco.data',
    image: req.body,
    thresh: 0.24, // optional, default: 0.24
    hierThresh: 0.5, // optional, default: 0.5,
  }, (modified, original, detections, dimensions) => {
    /**
    modified - raw frame with detections drawn, rgb24 format
    original - raw frame, as captured by the webcam/video, rgb24 format,
    detections - array of detections
    dimenstions - image width and height
    */
    res.send(detections);    
  });
});















module.exports = app;
