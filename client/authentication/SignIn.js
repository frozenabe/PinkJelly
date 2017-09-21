import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import * as firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import SignUp from './SignUp';

export default class SignIn extends Component{
  state = {
    email: '',
    password: '',
    registered: false,
  };

  onSignIn() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          if (!user.emailVerified) {
            this.props.onVerifyEmail();
          } else {
            this.props.onCheckLoggedIn();
          }
        })
        .catch(err => console.log(err));
  }

  setSignPage() {
    this.setState({
      registered: !this.state.registered,
    });
  }

  render() {
    const { registered } = this.state;
    if (registered) {
      return <SignUp setSignPage={this.setSignPage.bind(this)}/>;
    } else {
      return (
        <View style={styles.registerContainer}>
          <TextInput style={styles.inputStyle} placeholder="email" onChangeText={value => this.setState({email: value})}/>
          <TextInput style={styles.inputStyle} placeholder="password" onChangeText={value => this.setState({password: value})}/>
          <Button onPress={() => this.onSignIn()} title="login" color="#841584" accessibilityLabel="Learn more about this purple button"/>
          <Text onPress={() => this.setSignPage()}>New Account</Text>
        </View>
      );
    }
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
