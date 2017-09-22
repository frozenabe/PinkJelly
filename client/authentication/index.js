import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScreenOrientation } from 'expo';
import * as firebase from 'firebase';

import SignIn from './SignIn';
import EmailVerify from './EmailVerify';

export default class Authentication extends Component {
  state = {
    emailVerification: true,
  };

  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

  }

  onVerifyEmail() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({ emailVerification: !this.state.emailVerification });
      })
      .catch(err => console.log(err));
  }


  render() {
    const { emailVerification } = this.state;
    // console.log(!firebase.auth().currentUser.emailVerified);
    return (
      <View style={styles.wrapper}>
        {
          !emailVerification
            ? <EmailVerify onVerifyEmail={this.onVerifyEmail.bind(this)}/>
            : <SignIn onCheckLoggedIn={this.props.onCheckLoggedIn} onVerifyEmail={this.onVerifyEmail.bind(this)}/>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
