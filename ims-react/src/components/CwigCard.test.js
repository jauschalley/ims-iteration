import React from 'react';
import renderer from 'react-test-renderer';
import CwigCard from './CwigCard';

describe('<CwigCard />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <CwigCard />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});