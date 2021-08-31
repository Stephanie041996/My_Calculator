import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

describe('Home', () => {
  it('should render paragraph with title', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
