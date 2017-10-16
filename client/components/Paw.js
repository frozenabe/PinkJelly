import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PawFinger from './Paw_finger';
import PawPalm from './Paw_palm';

export default class Paw extends Component {

  render() {
    return (
      <View style={styles.pawContainer}>
        <PawFinger top={70} left={8} zIndex={2} scale={0.85} rotate="-24deg" delay={200}/>
        <PawFinger top={18} left={48} zIndex={1} scale={1} rotate="-8deg" delay={400}/>
        <PawFinger top={26} left={108} zIndex={1} scale={0.95} rotate="12deg" delay={600}/>
        <PawFinger top={70} left={148} zIndex={2} scale={0.85} rotate="24deg" delay={800}/>
        <View style={styles.pawPalm}>
          <PawPalm top={74} left={48} zIndex={3} scale={2}/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  pawContainer: {
    position: 'relative',
    paddingTop: 48,
    paddingHorizontal: 40,
    transform: [{rotate: '12deg'}],
  },
  pawPalm: {
    position: 'relative',
    width: 154,
    height: 160,
    borderRadius: 160,
    backgroundColor: '#fff',
  },
});
