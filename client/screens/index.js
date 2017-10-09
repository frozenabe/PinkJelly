import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Loading from '../components/Loading';
import CameraScreen from './CameraScreen';
import PhotoScreen from './PhotoScreen';


export default class Screens extends Component {
  state = {
    isLoading: false,
    imagePath: '',
    detectionData: [],
    yoloType: 'simple',
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

  setYoloType() {
    this.setState({
      yoloType: this.state.yoloType === 'simple' ? 'funny' : 'simple',
    });
  }

  render() {
    const { isLoading, imagePath, detectionData, yoloType } = this.state;

    if (isLoading) {
      return <Loading yoloType={yoloType}/>;
    } else if (!isLoading && detectionData.length) {
      return (
        <View style={styles.wrapper}>
          <PhotoScreen
            imagePath={imagePath}
            detectionData={detectionData}
            setDetectionData={this.setDetectionData.bind(this)}
            yoloType={yoloType}
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
            setYoloType={this.setYoloType.bind(this)}
            yoloType={yoloType}
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
