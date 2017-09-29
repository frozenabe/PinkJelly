import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
import Paw from './Paw';

export default class Loading extends Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    this.progressAnimate();
  }

  progressAnimate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      const progressing = setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
          clearInterval(progressing);          
       }
        this.setState({ progress });
      }, 500);
    }, 1000);
  }

  render() {
    const { progress } = this.state;
    return (
      <View style={styles.loading}>
        <Paw/>
        <View style={styles.progressBarPosition}>
          <ProgressBar
            progress={progress}
            width={200}
            color="#fff"
            unfilledColor="#64ffda"
            borderColor="#fff"
          />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64ffda',
  },
  progressBarPosition: {
    marginTop: 16,
  }
});
