import React from 'react';
import renderer from 'react-test-renderer';
import Qoute from '../../components/Qoute';

describe('Qoute', () => {
  it('should render qoute', () => {
    const tree = renderer.create(<Qoute />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
