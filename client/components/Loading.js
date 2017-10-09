import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Paw from './Paw';

export default class Loading extends Component {

  render() {
    return (
      <View style={styles.loading}>
        <Paw/>
        <Text style={styles.statement}>Loading ...</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#82b1ff',
  },
  statement: {
    marginTop: 24,
  }
});
