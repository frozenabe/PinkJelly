import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScreenOrientation } from 'expo';
import * as firebase from 'firebase';
import Screens from './screens';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify'

export default class App extends Component {
  state = {
    isLoading: false,
  }

  componentWillMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    const config = {
      apiKey: "AIzaSyBL4NufHmm1JthU7Xy0Mrw0oWakEDowLtU",
      authDomain: "lateral-spirit-179615.firebaseapp.com",
      databaseURL: "https://lateral-spirit-179615.firebaseio.com",
      projectId: "lateral-spirit-179615",
      storageBucket: "lateral-spirit-179615.appspot.com",
      messagingSenderId: "999843785302"
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    const _this = this;

    firebase.auth().signOut()
    .then(() => {})
    .catch(err => console.log(err));

    firebase.auth().onAuthStateChanged(user => {
      (user)
      ? _this.setState({isLoading: true});
      : _this.setState({isLoading: false});
    });
  }

    render() {
      const { isLoading } = this.state;
      if (!isLoading) {
        return (
          <View style={styles.container}>
            <Login/>
          </View>
        );
      } else if (isLoading && !firebase.auth().currentUser.emailVerified) {
        return (
          <View style={styles.container}>
            <EmailVerify/>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Screens/>
          </View>
        )
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }
    });
