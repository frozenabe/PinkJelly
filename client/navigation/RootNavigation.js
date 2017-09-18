import react from 'react';
import {StackNavigator} from 'react-navigation';
import {CameraScreen, PhotoScreen} from '../screens';

const headerStyle = {
  backgroundColor: '#1abc9c',
};

export const RootNavigation = StackNavigator({
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      title: 'Camera',
      headerStyle,
    },
  },
  PhotoScreen: {
    screen: PhotoScreen,
    navigationOptions: {
      title: 'Photo View',
      headerStyle,
    },
  }
});
