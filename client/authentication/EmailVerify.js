import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const EmailVerify = ({onVerifyEmail}) => {

  return (
    <View style={styles.container}>
      <Text>email 확인 하고 오셈</Text>
      <Button
        onPress = {() => onVerifyEmail()}
        title="확인"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EmailVerify;
