import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ScreenOrientation } from 'expo';
import * as firebase from 'firebase';

import SignIn from './SignIn';
import EmailVerify from './EmailVerify';

export default class Authentication extends Component {
  state = {
    emailVerification: true,
  };

  onVerifyEmail() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({ emailVerification: !this.state.emailVerification });
      })
      .catch(err => console.log(err));
  }


  render() {
    const { emailVerification } = this.state;
    const { onCheckLoggedIn } = this.props;
    // console.log(!firebase.auth().currentUser.emailVerified);
    return (
      <View style={styles.wrapper}>
        {
          !emailVerification
            ? <EmailVerify onVerifyEmail={this.onVerifyEmail.bind(this)}/>
            : <SignIn onCheckLoggedIn={onCheckLoggedIn} onVerifyEmail={this.onVerifyEmail.bind(this)}/>
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

Authentication.propTypes = {
  onCheckLoggedIn: PropTypes.func,
};
