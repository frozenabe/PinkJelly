import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import TouchToSpeakButton from '../components/TouchToSpeakButton';
import ControlBar from '../components/ControlBar';

const setObjectCoordinates = (originWidth, originHeight, x, y) => {
  const { height, width } = Dimensions.get('window');
  const adjustImageWidth = width * 0.9;
  const left = Math.floor((adjustImageWidth * x / originWidth) - 20);
  const top = Math.floor((height * y / originHeight) - 20);

  return { left, top };
};

const PhotoScreen = ({ imagePath, detectionData, setDetectionData, yoloType }) => {
  return (
    <View style={styles.imageContainer}>
      {
        detectionData.map((obj, i) => {
          const { label, x, y, height, width } = obj;
          const { left, top } = setObjectCoordinates(width, height, x, y);
          return <TouchToSpeakButton key={`${label}-${i}`} label={label} left={left} top={top}/>;
        })
      }
      <Image source={{ uri: imagePath }} style={styles.photo}/>
      <ControlBar screen="PHOTO" setDetectionData={setDetectionData} yoloType={yoloType}/>
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

PhotoScreen.propTypes = {
  imagePath: PropTypes.string,
  detectionData: PropTypes.array,
  setDetectionData: PropTypes.func,
  yoloType: PropTypes.string,
};

export default PhotoScreen;
