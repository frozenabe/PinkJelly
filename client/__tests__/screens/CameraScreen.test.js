import React from 'react';
import renderer from 'react-test-renderer';

import CameraScreen from '../../screens/CameraScreen';

describe('Testing CameraScreen component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<CameraScreen />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
