import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Paw from './Paw';

const Loading = ({yoloType}) => {

  const loading = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yoloType === 'simple' ? '#82b1ff' : '#ee6e73',
  };

  return (
    <View style={loading}>
      <Paw/>
      <Text style={styles.statement}>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statement: {
    marginTop: 24,
    color: '#fff',
  }
});

export default Loading;
