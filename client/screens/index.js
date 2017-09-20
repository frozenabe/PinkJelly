import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScreenOrientation } from 'expo';

import CameraScreen from './CameraScreen';
import PhotoScreen from './PhotoScreen';


export default class Screens extends Component {
  state = {
    imagePath: null,
    detectionData: [],
  }

  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
  }

  setImagePath(path) {
    this.setState({
      imagePath: path,
    });
  }

  getDetectionData(data) {
    this.setState({
      detectionData: data,
    });
  }

  slideToPhoto() {
    this._swiper.scrollBy(1);
  }

  render() {
    return (
      <Swiper ref={(swiper) => {this._swiper = swiper;}} showsButtons={false} loop={false}>
        <CameraScreen
          setImagePath={this.setImagePath.bind(this)}
          slideToPhoto={this.slideToPhoto.bind(this)}
          getDetectionData={this.getDetectionData.bind(this)}
        />
        <PhotoScreen imagePath={this.state.imagePath} detectionData={this.state.detectionData}/>
      </Swiper>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
