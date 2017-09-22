import {
  AWS_S3_KEY_PREFIX,
  AWS_S3_BUCKET_NAME,
  AWS_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_EC2,
} from 'react-native-dotenv';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, Permissions, ScreenOrientation } from 'expo';
import axios from 'axios';
import { RNS3 } from 'react-native-aws3';

import ControlBar from '../components/ControlBar';


export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snapshot() {
    this.camera.takePictureAsync()
      .then(data => {
        const file = {
          uri: data,
          name: "image.jpg",
          type: "image/jpg"
        }

        const options = {
          keyPrefix: AWS_S3_KEY_PREFIX,
          bucket: AWS_S3_BUCKET_NAME,
          region: AWS_REGION,
          accessKey: AWS_ACCESS_KEY,
          secretKey: AWS_SECRET_KEY,
          successActionStatus: 201,
        }

        RNS3.put(file, options).then(response => {
          if (response.status !== 201) {
            throw new Error("Failed to upload image to S3");
          }
          console.log(response.body);
        });
        this.props.setImagePath(data);
      })
      .then(() => {
        this.props.setLoadingStatus(true);
        axios.get('http://10.130.106.49:7080/')
          .then(res => {
            if (!res.data.length) {
              return alert(`We can't detect anything. /n Please take a new picture.`)
            }
            this.props.setDetectionData(res.data);
          })
          .then(() => {
            console.log('aweaweaweawe');
            this.props.setLoadingStatus(false)
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (!hasCameraPermission) {
    // if (hasCameraPermission === null) {
    //   return <Text>ssibal</Text>;
    // } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => {this.camera = ref;}} style={styles.camera}>
            <View style={styles.viewport}>
              <ControlBar screen="CAMERA" snapshot={this.snapshot.bind(this)}/>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  viewport: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
