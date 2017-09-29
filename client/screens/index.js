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

  // slideToPhoto() {
  //   this._swiper.scrollBy(1);
  // }

  render() {
    const { isLoading, imagePath, detectionData } = this.state;

    if (isLoading) {
      return <Loading/>;
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


// return (
//   <Swiper ref={(swiper) => {this._swiper = swiper;}} showsButtons={false} loop={false}>
//     <CameraScreen
//       setImagePath={this.setImagePath.bind(this)}
//       slideToPhoto={this.slideToPhoto.bind(this)}
//       getDetectionData={this.getDetectionData.bind(this)}
//     />
//     <PhotoScreen imagePath={this.state.imagePath} detectionData={this.state.detectionData}/>
//   </Swiper>
// );
