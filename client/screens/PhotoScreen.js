import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import TouchToSpeakButton from '../components/TouchToSpeakButton';
import Loading from '../components/Loading';
import ControlBar from '../components/ControlBar';


const PhotoScreen = ({imagePath, detectionData, setDetectionData}) => {
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
          : <Image source={{uri: imagePath}} style={styles.photo}/>
      }
      <ControlBar screen="PHOTO" setDetectionData={setDetectionData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
  },
});

export default PhotoScreen;
