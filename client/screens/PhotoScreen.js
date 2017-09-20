import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import TouchToSpeakButton from '../components/TouchToSpeakButton';
import Loading from '../components/Loading';

const PhotoScreen = ({imagePath, detectionData}) => {
  
  return (
    <View style={styles.imageContainer}>
      {
         detectionData.map((obj, i) => {
           const { label, top, left } = obj;
           return <TouchToSpeakButton key={`${label}-${i}`} label={label} top={top} left={left}/>;
        })
      }
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
