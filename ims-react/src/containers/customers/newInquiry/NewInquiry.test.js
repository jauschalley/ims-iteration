import React from 'react';
import renderer from 'react-test-renderer';
import ReferenceDataStore from '../../../stores/ReferenceDataStore';
import NewInquiry from './NewInquiry';
import referenceData from './mockReferenceData';

describe('<NewInquiry />', () => {
  it('renders correctly', () => {
    const referenceDataStore = new ReferenceDataStore(referenceData);
    const tree = renderer
      .create(
        <NewInquiry referenceDataStore={referenceDataStore}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
