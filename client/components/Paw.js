import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PawFinger from './Paw_finger';
import PawPalm from './Paw_palm';

export default class Paw extends Component {

  render() {
    return (
      <View style={styles.pawContainer}>
        <PawFinger top={28} left={-28} zIndex={2} scale={0.85} rotate="-24deg"/>
        <PawFinger top={-24} left={12} zIndex={1} scale={1} rotate="-8deg"/>
        <PawFinger top={-16} left={72} zIndex={1} scale={0.95} rotate="12deg"/>
        <PawFinger top={24} left={110} zIndex={2} scale={0.85} rotate="24deg"/>
        <PawPalm top={80} left={54} zIndex={3} scale={2}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  pawContainer: {
    position: 'relative',
    width: 154,
    height: 160,
    borderRadius: 160,
    backgroundColor: '#fff',
    transform: [{rotate: '12deg'}],
  },
});
