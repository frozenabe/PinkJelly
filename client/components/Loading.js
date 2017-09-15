import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.loading}>
        <Image
          source={{uri: 'https://s3.ap-northeast-2.amazonaws.com/foxtailbucket/resources/cat.png'}}
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
