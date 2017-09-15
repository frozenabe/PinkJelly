import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { RootNavigation } from './navigation/RootNavigation';
import { ScreenOrientation } from 'expo';

import Loading from './components/Loading';

export default class App extends Component {

  componentWillMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Loading/> */}
        <RootNavigation />
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
