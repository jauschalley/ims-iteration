import React from 'react';
import renderer from 'react-test-renderer';
import ViewInquiry from './ViewInquiry';

describe('<ViewInquiry />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ViewInquiry />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});