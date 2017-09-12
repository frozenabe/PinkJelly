import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { RootNavigation } from './navigation/RootNavigation';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
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
