import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import * as firebase from 'firebase';
import { AWS_S3_LOADING_IMAGE_URL } from 'react-native-dotenv';

export default class SignUp extends Component{
  state = {
    email: '',
    password: '',
    emailType: true,
    passwordType: true,
    confirmPasswordType: true,
  };

  onSignUp() {
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

    if (email !== '' && password !== '') {
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
  }

  onConfirmPassword(confirmPassword) {
    const { password, confirmPasswordType } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        confirmPasswordType: false
      })
    } else {
      this.setState({
        confirmPasswordType: true
      })
    }

  }

  render() {
    const { emailType, passwordType, confirmPasswordType } = this.state;
    return (
      <View style={styles.registerContainer}>
        <Image
          source={{ uri: AWS_S3_LOADING_IMAGE_URL }}
          style={styles.loadingLogo}
          resizeMode="cover"
        />
        <FormInput
          placeholder="email"
          onChangeText={value => this.setState({email: value})}
        />
        {(!emailType)
          ? <FormValidationMessage>Email을 입력해주세요</FormValidationMessage>
          : null
        }
        <FormInput
          secureTextEntry
          placeholder="password"
          onChangeText={value => this.setState({password: value})}
        />
        {(!passwordType)
          ? <FormValidationMessage>Password를 입력해주세요</FormValidationMessage>
          : null
        }
        <FormInput
          secureTextEntry
          placeholder="confirmPassword"
          onChangeText={value => this.onConfirmPassword(value)}
        />
        {(!confirmPasswordType)
          ? <FormValidationMessage>Password가 다르거나 입력되지 않았습니다</FormValidationMessage>
          : null
        }
        <Button onPress={() => this.onSignUp()} title="등록" color='black' backgroundColor='white'/>
        <Button onPress={() => this.props.setSignPage()} title='돌아가기' color='black' backgroundColor='white' />
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
  loadingLogo: {
    bottom: 80,
    width: 200,
    height: 200,
  }
});