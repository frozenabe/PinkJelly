import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';

const ControlBar = ({ screen, snapshot, setDetectionData }) => {
  switch (screen) {
    case 'CAMERA':
      return (
        <View style={styles.controlBar}>
          <View style={styles.circle} >
            <SimpleLineIcons name="camera" size={32} color="#fff" onPress={() => snapshot()}/>
          </View>
        </View>
      );
    case 'PHOTO':
      return (
        <View style={styles.controlBar}>
          <Entypo name="back" size={32} color="#fff" onPress={() => setDetectionData([])}/>
        </View>
      );
    default:
      console.log('no screen');
  }

}

const styles = StyleSheet.create({
  controlBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    backgroundColor: '#82b1ff',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    padding: 4,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 64,
    backgroundColor: 'transparent'
  },
});

ControlBar.propTypes = {
  screen: PropTypes.string,
  snapshot: PropTypes.func,
  setDetectionData: PropTypes.func,
};

export default ControlBar;
