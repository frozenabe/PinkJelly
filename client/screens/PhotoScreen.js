import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import TouchToSpeakButton from '../components/TouchToSpeakButton';
import Loading from '../components/Loading';
import ControlBar from '../components/ControlBar';

const setObjectCoordinates = (originWidth, originHeight, x, y) => {
  const { height, width } = Dimensions.get('window');
  const adjustImageWidth = width * 0.9;
  const left = Math.floor((adjustImageWidth * x / originWidth) - 20);
  const top = Math.floor((height * y / originHeight) - 20);

  return { left, top };
};

const PhotoScreen = ({imagePath, detectionData, setDetectionData}) => {
  return (
    <View style={styles.imageContainer}>
      {
         detectionData.map((obj, i) => {
           const { label, x, y, height, width } = obj;
           const { left, top } = setObjectCoordinates(width, height, x, y);
           return <TouchToSpeakButton key={`${label}-${i}`} label={label} left={left} top={top}/>;
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
    flexDirection: 'row',
  },
  photo: {
    flex: 9,
  },
});

export default PhotoScreen;
