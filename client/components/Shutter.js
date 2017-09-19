import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Shutter extends Component {

  render() {
    const { snapshot } = this.props;
    return (
      <View style={styles.outterCircle}>
        <TouchableWithoutFeedback onPress={() => this.refs.view.rubberBand(600).then(() => snapshot())}>
          <Animatable.View ref="view" style={styles.innerCircle}>
            <Image source={{uri: 'https://s3.ap-northeast-2.amazonaws.com/foxtailbucket/resources/pink_paw.png'}} style={{flex:1}} resizeMode="cover"/>
          </Animatable.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

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
