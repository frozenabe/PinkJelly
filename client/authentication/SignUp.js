import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import * as firebase from 'firebase';

export default class SignUp extends Component{
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSignUp() {
    const { email, password } = this.state;
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
  }

  onConfirmPassword(value) {
    const { password, confirmPassword } = this.state;
    this.setState({
      confirmPassword: value,
    });

    if (password === confirmPassword) {
      console.log('Incorrect password');
    }
  }

  render() {

    return (
      <View style={styles.registerContainer}>
        <TextInput style={styles.inputStyle} placeholder="email" onChangeText={value => this.setState({email: value})}/>
        <TextInput style={styles.inputStyle} placeholder="password" onChangeText={value => this.setState({password: value})}/>
        <TextInput style={styles.inputStyle} placeholder="confirmPassword" onChangeText={value => this.onConfirmPassword(value)}/>
        <Button onPress={() => this.onSignUp()} title="Sign Up" color="#841584" accessibilityLabel="Learn more about this purple button"/>
        <Text onPress={() => this.props.setSignPage()}>Back To SignIn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  inputStyle: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
