import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';

export default class EmailVerify extends Component {
  state = {
    emailVerify: false,
  };

  click() {
    const _this = this;
    firebase.auth().signOut()
      .then(() => {
        _this.setState({ emailVerify: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.emailVerify) {
      return (
        <View style={styles.container}>
          <Text>email 확인 하고 오셈</Text>
          <Button
            onPress = {this.click.bind(this)}
            title="확인"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      )
    }
    console.log(firebase.auth().currentUser)

    return (
      <View style={styles.container}>
        <Login />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
