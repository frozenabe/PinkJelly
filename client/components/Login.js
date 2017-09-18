import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import * as firebase from 'firebase';
import SignUp from './SignUp';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signUp: false,
    };
  }

  loginClick() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.emailVerified);
        alert('로그인 되셧습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  }


  signUpClick() {
    this.setState({ signUp: true });
  }

  render() {
    if (!this.state.signUp) {
    return (
      <View style={styles.container}>
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         placeholder="email"
         onChangeText={text => this.setState({email: text})}
        />
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         placeholder="password"
         onChangeText={(text) => this.setState({password: text})}
        />
        <Button
          onPress = {this.loginClick.bind(this)}
          title="login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress = {this.signUpClick.bind(this)}
          title="signup"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
    return (
      <View style={styles.container}>
       <SignUp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
