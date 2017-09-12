import react from 'react';
import {StackNavigator} from 'react-navigation';
import {CameraScreen, PhotoScreen} from '../screens';

export const RootNavigation = StackNavigator({
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      },
    },
  },
  PhotoScreen: {
    screen: PhotoScreen,
    navigationOptions: {

    },
  }
});
