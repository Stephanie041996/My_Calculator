import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('App', () => {
  it('should render calculator', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
