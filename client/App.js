import {
  GOOGLE_API_KEY,
  GOOGLE_AUTH_DOMAIN,
  GOOGLE_DB_URL,
  GOOGLE_PROJECT_ID,
  GOOGLE_STORAGE_BUCKET,
  GOOGLE_MESSAGING_SENDER_ID,
} from 'react-native-dotenv';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScreenOrientation } from 'expo';
import * as firebase from 'firebase';

import Screens from './screens';
import Authentication from './authentication';

export default class App extends Component {
  state = {
    loggedIn: false,
  };

  componentWillMount() {
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
    this.onCheckLoggedIn();
  }

  onCheckLoggedIn() {
    const user = firebase.auth().currentUser;
    (!user)
      ? this.setState({loggedIn: false})
      : this.setState({loggedIn: true});
  }

  render() {
    const { loggedIn } = this.state;
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
