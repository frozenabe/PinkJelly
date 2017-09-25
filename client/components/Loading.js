import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Paw from './Paw';

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.loading}>
        <Paw/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe57f',
  },
});
