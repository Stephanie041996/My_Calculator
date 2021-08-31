import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPannel', () => {
  it('should render keys', () => {
    const handleClick = () => '1';
    const tree = renderer.create(<ButtonPanel clickHandler={handleClick} />);
    expect(tree).toMatchSnapshot();
  });
});
