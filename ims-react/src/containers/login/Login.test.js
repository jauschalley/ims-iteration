import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import AuthStore from '../../stores/AuthStore';

describe('<Login />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Login authStore={new AuthStore()} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});