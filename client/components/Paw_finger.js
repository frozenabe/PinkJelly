import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

export default class PawFinger extends Component {
  render() {
    const { rotate, scale, top, left, zIndex, delay } = this.props;
    const style = {
      position: 'absolute',
      top,
      left,
      zIndex,
      transform: [{ scale }, { rotate }],
    };

    return (
      <View style={style}>
        <Animatable.View 
          animation="pulse" 
          easing="ease-out" 
          iterationCount="infinite" 
          duration={800} 
          delay={delay} 
          style={styles.pawFinger} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  pawFinger: {
    width: 70,
    height: 78,
    margin: 4,
    borderRadius: 90,
    borderWidth: 12,
    borderColor: '#fff',
    backgroundColor: '#ff80ab',
  },
});

PawFinger.propTypes = {
  rotate: PropTypes.string,
  scale: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  zIndex: PropTypes.number,
};
