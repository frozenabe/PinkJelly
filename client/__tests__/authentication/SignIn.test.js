import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from '../../authentication/SignIn';

describe('Testing SignIn component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<SignIn />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
