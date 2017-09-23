import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Speech } from 'expo';

export default class TouchToSpeakButton extends Component {

  textToSpeech(text) {
    Speech.stop();
    Speech.speak(text, {
      language: 'en-US', rate: 0.7,
    })
  }

  render() {
    const { label, left, top } = this.props;

    return (
      <View
        style={{
          position: 'absolute',
          top: top,
          left: left,
          zIndex:10,
          width: 40,
          height: 40,
          borderRadius: 40,
        }}>
        <TouchableWithoutFeedback onPress={() => this.textToSpeech(label)}>
          <Animatable.View
            animation="zoomIn"
            duration={1000}
            easing="ease-out"
            iterationCount="infinite"
            style={styles.sonar}>
          </Animatable.View>
        </TouchableWithoutFeedback>
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
