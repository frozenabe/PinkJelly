import React from 'react';
import renderer from 'react-test-renderer';

import SignUp from '../../authentication/SignUp';

describe('Testing SignUp component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<SignUp />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
