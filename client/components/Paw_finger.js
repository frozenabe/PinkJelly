import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class PawFinger extends Component {
  render() {
    const { rotate, scale, top, left, zIndex } = this.props;
    const style = {
      position: 'absolute',
      top,
      left,
      zIndex,
      transform: [{scale}, {rotate}],
    };

    return (
      <View style={style}>
        <TouchableWithoutFeedback onPress={() => this.refs.palm.rubberBand(400)}>
          <Animatable.View ref="palm" style={styles.pawFinger} ></Animatable.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  pawFinger: {
     width: 70,
     height: 78,
     borderRadius: 90,
     borderWidth: 12,
     borderColor: '#fff',
     backgroundColor: '#ff80ab',
  },
});
