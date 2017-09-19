import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default class TouchToSpeakButton extends Component {

  render() {
    return (
      <View>
        <Animatable.Image animation="rubberBand"></Animatable.Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  outterCircle: {
    width: 80,
    height: 80,
    padding: 4,
    borderColor: 'rgba(255,255,255,.9)',
    borderWidth: 4,
    borderRadius: 80,
    backgroundColor: 'transparent',
  },
  innerCircle: {
    flex: 1,
    padding: 8,
    borderRadius: 72,
    backgroundColor: 'rgba(255,255,255,.9)',
  },
});
