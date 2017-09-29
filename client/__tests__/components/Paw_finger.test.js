import React from 'react';
import renderer from 'react-test-renderer';

import PawFinger from '../../components/Paw_finger';

describe('Testing PawFinger component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<PawFinger />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
