import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Loading from '../components/Loading';

const PhotoScreen = ({imagePath}) => {
  return (
    <View style={styles.imageContainer}>
      {
        !imagePath
          ? <Loading/>
          : <Image source={{uri: imagePath}} style={styles.imageComp}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  imageComp: {
    flex: 1,
  },
});

export default PhotoScreen;
