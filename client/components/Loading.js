import { AWS_S3_LOADING_IMAGE_URL } from 'react-native-dotenv';
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.loading}>
        <Image
          source={{ uri: AWS_S3_LOADING_IMAGE_URL }}
          style={styles.loadingLogo}
          resizeMode="cover"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingLogo: {
    width: 200,
    height: 200,    
  }
});
