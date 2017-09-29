import React from 'react';
import renderer from 'react-test-renderer';

import Screens from '../../screens/index';

describe('Testing Screens component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<Screens />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
