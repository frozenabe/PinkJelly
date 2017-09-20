import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import * as firebase from 'firebase';

export default class Register extends Component{
  state = {
    email: '',
    password: '',
  };

  onLoginPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          if (!user.emailVerified) {
            this.props.onVerifyEmail();
          } else {
            this.props.onCheckLoggedIn();
          }
        })
        .catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                  user.sendEmailVerification();
                  alert('Please, verify your email address.')
                })
                .catch(error => {
                  (error.code === 'auth/weak-password')
                    ? alert('The password is too weak.')
                    : alert(error.message);
                  console.log(error);
                });
        });
  }

  render() {
    if (this.props.loggedIn) {

    }
    return (
      <View style={styles.registerContainer}>
        <TextInput style={styles.inputStyle} placeholder="email" onChangeText={text => this.setState({email: text})}/>
        <TextInput style={styles.inputStyle} placeholder="password" onChangeText={text => this.setState({password: text})}/>
        <Button onPress={() => this.onLoginPress()} title="login" color="#841584" accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
