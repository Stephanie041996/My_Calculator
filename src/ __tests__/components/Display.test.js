import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('Display', () => {
  it('should display result', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
