import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Shutter = ({snapshot}) => {
  return (
    <View style={styles.outterCircle}>
      <TouchableWithoutFeedback style={styles.innerCircle} onPress={() => this.refs.image.bounce(200).then(snapshot())}>
        <Animatable.Image ref="image" source={{uri: 'https://s3.ap-northeast-2.amazonaws.com/foxtailbucket/resources/pink_paw.png'}} style={{flex: 1,}} resizeMode="cover"/>
      </TouchableWithoutFeedback>
    </View>
  );
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
    backgroundColor: 'rgba(255,255,255,.9)
  },
});

export default Shutter;
