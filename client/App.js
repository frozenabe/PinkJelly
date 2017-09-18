import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { RootNavigation } from './navigation/RootNavigation';
import * as firebase from 'firebase';
import Login from './component/Login.js';
import EmailVerify from './component/EmailVerify'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentWillMount () {
    const config = {
    apiKey: "AIzaSyBL4NufHmm1JthU7Xy0Mrw0oWakEDowLtU",
    authDomain: "lateral-spirit-179615.firebaseapp.com",
    databaseURL: "https://lateral-spirit-179615.firebaseio.com",
    projectId: "lateral-spirit-179615",
    storageBucket: "lateral-spirit-179615.appspot.com",
    messagingSenderId: "999843785302"
  };
  firebase.initializeApp(config);
  // firebase.auth().createUserWithEmailAndPassword('ddd@naver.com', '1111111');
  }

  componentDidMount() {
    firebase.auth().signOut().then(() => {
    })
      .catch((err) => {
        console.log(err);
      });
    const _this = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        _this.setState({ isLoading: true });
      } else {
        _this.setState({ isLoading: false });
      }
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Login />
        </View>
      );
    } else if (this.state.isLoading && !firebase.auth().currentUser.emailVerified) {
      return (
        <View style={styles.container}>
          <EmailVerify />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <RootNavigation />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
