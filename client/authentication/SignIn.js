import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import SignUp from './SignUp';
import { AWS_S3_LOADING_IMAGE_URL } from 'react-native-dotenv';

export default class SignIn extends Component{
  state = {
    email: '',
    password: '',
    emailType: true,
    passwordType: true,
    registered: false,
  };

  onSignIn() {
    const { email, password } = this.state;
    if (email === '') {
       this.setState({emailType: false})
    } else {
       this.setState({emailType: true})
    }

    if (password === '') {
      this.setState({passwordType: false})
    } else {
      this.setState({passwordType: true})
    }

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
      emailType: true,
      passwordType: true,
      registered: !this.state.registered,
    });
  }

  render() {
    const { registered, emailType, passwordType } = this.state;
    if (registered) {
      return <SignUp setSignPage={this.setSignPage.bind(this)}/>;
    } else {
      return (
        <View style={styles.registerContainer}>
          <Image
            source={{ uri: AWS_S3_LOADING_IMAGE_URL }}
            style={styles.loadingLogo}
            resizeMode="cover"
          />
          <FormInput
            onChangeText={value => {this.setState({email: value})}}
            placeholder="Email Address"
            />
          {(!emailType)
            ? <FormValidationMessage>Email을 입력해주세요</FormValidationMessage>
            : null
          }
          <FormInput
            onChangeText={value => this.setState({password: value})}
            placeholder="Password"
            secureTextEntry
            />
          {(!passwordType)
            ? <FormValidationMessage>Password을 입력해주세요</FormValidationMessage>
            : null
          }
          <Button onPress={() => this.onSignIn()} title="로그인" color='black' backgroundColor='white'/>
          <Button onPress={() => this.setSignPage()} title='회원가입' color='black' backgroundColor='white'/>
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
  },
  loadingLogo: {
    bottom: 80,
    width: 200,
    height: 200,
  }
});