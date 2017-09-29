import React from 'react';
import renderer from 'react-test-renderer';

import PawPalm from '../../components/Paw_palm';

describe('Testing PawPalm component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<PawPalm />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
