import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import CameraScreen from './CameraScreen';
import PhotoScreen from './PhotoScreen';


export default class Screens extends Component {
  state = {
    imagePath: null,
  }

  setImagePath(path) {
    this.setState({
      imagePath: path,
    });
  }

  slideToPhoto() {
    this._swiper.scrollBy(1);
  }

  render() {
    return (
      <Swiper ref={(swiper) => {this._swiper = swiper;}} showsButtons={false} loop={false}>
        <CameraScreen setImagePath={this.setImagePath.bind(this)} slideToPhoto={this.slideToPhoto.bind(this)}/>
        <PhotoScreen imagePath={this.state.imagePath} />
      </Swiper>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
