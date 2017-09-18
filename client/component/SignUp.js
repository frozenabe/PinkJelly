import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import * as firebase from 'firebase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  signUpClick() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.emailVerified);
        user.sendEmailVerification();
        alert('메일보구왕');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  render() {
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
          onPress = {this.signUpClick.bind(this)}
          title="signup"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
//
// firebase.auth().signOut()
// .then(function() {
//   // Sign-out successful.
// })
// .catch(function(err) {
//   // An error happened.
// });
