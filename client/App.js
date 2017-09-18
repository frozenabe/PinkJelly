import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { ScreenOrientation } from 'expo';
import Swiper from 'react-native-swiper';
import Screens from './screens';

export default class App extends Component {
  componentWillMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Screens/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
