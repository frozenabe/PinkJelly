import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

export default class PawPalm extends Component {
  render() {
    const { scale, zIndex, top, left } = this.props;
    const style = {
      position: 'absolute',
      top,
      left,
      zIndex,
      transform: [{scale}],
    };
    return (
      <View style={style}>
        <TouchableWithoutFeedback onPress={() => this.refs.palm.rubberBand(400)}>
          <Animatable.View ref="palm" style={styles.PawPalm}></Animatable.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  PawPalm: {
     width: 44,
     height: 40,
     borderRadius: 48,
     backgroundColor: '#ff80ab',
  },
});

PawPalm.propTypes = {
  scale: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  zIndex: PropTypes.number,
};
