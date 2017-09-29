import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Testing App component', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
