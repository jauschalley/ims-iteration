import React from 'react';
import renderer from 'react-test-renderer';
import {CheckboxGroup} from './CheckboxGroup';

describe('<CheckboxGroup />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <CheckboxGroup 
          value="blah"
          id="1"
          onChange={() => {}}
          onBlur={() => {}}
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});