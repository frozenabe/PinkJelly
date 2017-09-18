import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from 'axios';
import { RNS3 } from 'react-native-aws3';

import Shutter from '../components/Shutter';

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
      .then((data) => {
        const file = {
          uri: data,
          name: "image.jpg",
          type: "image/jpg"
        }

        const options = {
          keyPrefix: "images/",
          bucket: "foxtailbucket",
          region: "ap-northeast-2",
          accessKey: "AKIAIIUSH444NSDBVBNA",
          secretKey: "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",
          successActionStatus: 201
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
        axios.get('/')
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      })
      .then(() => this.props.slideTrigger())
      .catch(err => console.log(err));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>ssibal</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => {this.camera = ref;}} style={styles.camera}>
            <View style={styles.shutterContainer}>
              <Shutter snapshot={this.snapshot.bind(this)}/>
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
  shutterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
});
