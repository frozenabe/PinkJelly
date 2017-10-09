import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const EmailVerify = ({ onVerifyEmail }) => {

  return (
    <View style={styles.container}>
      <Text>Please check your Email for confirmation</Text>
      <Button
        onPress = {() => onVerifyEmail()}
        title="confirm"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

EmailVerify.propTypes = {
  onVerifyEmail: PropTypes.func,
};

export default EmailVerify;
