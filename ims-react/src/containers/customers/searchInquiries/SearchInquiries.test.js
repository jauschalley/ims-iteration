import React from 'react';
import renderer from 'react-test-renderer';
import ReferenceDataStore from '../../../stores/ReferenceDataStore';
import SearchInquiries from './SearchInquiries';
import referenceData from '../newInquiry/mockReferenceData';
import InquirySearchStore from '../../../stores/InquirySearchStore';
import mockSearchResults from './mockSearchResults';

describe('<SearchInquiries />', () => {
  it('renders correctly', () => {
    const referenceDataStore = new ReferenceDataStore(referenceData);
    const tree = renderer
      .create(
        <SearchInquiries 
          referenceDataStore={referenceDataStore}
          inquirySearchStore={new InquirySearchStore(mockSearchResults)}
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
