import React from 'react';
import renderer from 'react-test-renderer';

import Authentication from '../../authentication/index';

describe('Testing Authentication component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<Authentication />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
