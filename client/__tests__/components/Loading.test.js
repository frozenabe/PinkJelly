import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../../components/Loading';

describe('Testing Loading component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<Loading />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
