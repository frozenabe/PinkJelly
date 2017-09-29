import React from 'react';
import renderer from 'react-test-renderer';

import Paw from '../../components/Paw';

describe('Testing Paw component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<Paw />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
