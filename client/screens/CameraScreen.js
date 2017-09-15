import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from 'axios';

import Shutter from '../components/Shutter';

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    photoID: 0,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snapshot() {
    this.camera.takePictureAsync()
      .then((data) => {
        axios.post('/', {
          imagePath: data,
        })
        .then(res => console.log(res))
      })
      .catch(err => console.log(err));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
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
