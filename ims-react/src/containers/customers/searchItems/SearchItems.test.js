import React from 'react';
import renderer from 'react-test-renderer';
import SearchItems from './SearchItems';
import mockSearchResults from './mockSearchResults';
import ItemSearchStore from '../../../stores/ItemSearchStore';
import referenceData from '../newInquiry/mockReferenceData';
import ReferenceDataStore from '../../../stores/ReferenceDataStore';

describe('<SearchItems />', () => {
  it('renders correctly', () => {
    const referenceDataStore = new ReferenceDataStore(referenceData);
    const tree = renderer
      .create(
        <SearchItems 
          itemSearchStore={new ItemSearchStore(mockSearchResults)} 
          referenceDataStore={referenceDataStore} 
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});