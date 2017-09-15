import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Shutter = ({snapshot}) => {
  return (
    <View style={styles.outterCircle}>
      <TouchableOpacity style={styles.innerCircle} onPress={() => snapshot()}>
        {/* Action Shutter */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outterCircle: {
    width: 64,
    height: 64,
    padding: 4,
    borderColor: '#fff',
    borderWidth: 4,
    borderRadius: 64,
    backgroundColor: 'transparent',
  },
  innerCircle: {
    flex: 1,
    borderRadius: 56,
    backgroundColor: '#fff',
  },
});

export default Shutter;
