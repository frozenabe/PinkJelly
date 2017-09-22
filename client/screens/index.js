import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScreenOrientation } from 'expo';

import Loading from '../components/Loading';
import CameraScreen from './CameraScreen';
import PhotoScreen from './PhotoScreen';


export default class Screens extends Component {
  state = {
    isLoading: false,
    imagePath: '',
    detectionData: [],
  }

  componentWillMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
  }

  setImagePath(path) {
    this.setState({
      imagePath: path,
    });
  }

  setDetectionData(data) {
    this.setState({
      detectionData: data,
    });
  }

  setLoadingStatus(bool) {
    this.setState({
      isLoading: bool,
    });
  }

  render() {
    const { isLoading, imagePath, detectionData } = this.state;

    if (isLoading) {
      return <Text>asdasd</Text>;
    } else if (!isLoading && detectionData.length) {
      return (
        <View style={styles.wrapper}>
          <PhotoScreen
            imagePath={imagePath}
            detectionData={detectionData}
            setDetectionData={this.setDetectionData.bind(this)}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.wrapper}>
          <CameraScreen
            setLoadingStatus={this.setLoadingStatus.bind(this)}
            setImagePath={this.setImagePath.bind(this)}
            setDetectionData={this.setDetectionData.bind(this)}
          />
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
