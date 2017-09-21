import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Speech } from 'expo';

export default class TouchToSpeakButton extends Component {

  textToSpeech (text) {
    Expo.Speech.speak(text, {
      language: en-US, rate: 0.6,
    })
  }
  
  render() {
    const { top, left } = this.props;
    return (
      <View
        style={{
          position: 'absolute',
          top: top,
          left: left,
          zIndex:5,
          width: 40,
          height: 40,
          borderRadius: 40,
        }}
        onPress={() => this.textToSpeech(this.props.label)}>
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          easing="ease-out"
          iterationCount="infinite"
          style={styles.sonar}>
        </Animatable.View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  sonar: {
    flex: 1,
    borderWidth: 4,
    borderColor: "rgba(255,255,255, .5)",
    borderRadius: 40,
  },
});
