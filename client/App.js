import {
  GOOGLE_API_KEY,
  GOOGLE_AUTH_DOMAIN,
  GOOGLE_DB_URL,
  GOOGLE_PROJECT_ID,
  GOOGLE_STORAGE_BUCKET,
  GOOGLE_MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import React, { Component } from 'react';
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
      apiKey: GOOGLE_API_KEY,
      authDomain: GOOGLE_AUTH_DOMAIN,
      databaseURL: GOOGLE_DB_URL,
      projectId: GOOGLE_PROJECT_ID,
      storageBucket: GOOGLE_STORAGE_BUCKET,
      messagingSenderId: GOOGLE_MESSAGING_SENDER_ID,
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    const _this = this;

    // firebase.auth().signOut().catch(err => console.log(err));

    firebase.auth().onAuthStateChanged(user => {
      (user)
        ? _this.setState({isLoading: true})
        : _this.setState({isLoading: false});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Screens/>
      </View>
    );
    // const {isLoading} = this.state;
    // if (!isLoading) {
    //   return (
    //     <View style={styles.container}>
    //       <Login/>
    //     </View>
    //   );
    // } else if (isLoading && !firebase.auth().currentUser.emailVerified) {
    //   return (
    //     <View style={styles.container}>
    //       <EmailVerify/>
    //     </View>
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       <Screens/>
    //     </View>
    //   )
    // }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
