import React from 'react';
import renderer from 'react-test-renderer';

import EmailVerify from '../../authentication/EmailVerify';

describe('Testing EmailVerify component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<EmailVerify />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
