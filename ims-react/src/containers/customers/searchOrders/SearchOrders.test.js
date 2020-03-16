import React from 'react';
import renderer from 'react-test-renderer';
import SearchOrders from './SearchOrders';
import referenceData from '../newInquiry/mockReferenceData';
import mockSearchResults from './mockSearchResults';
import ReferenceDataStore from '../../../stores/ReferenceDataStore';
import OrderSearchStore from '../../../stores/OrderSearchStore';

describe('<SearchOrders />', () => {
  it('renders correctly', () => {
    const referenceDataStore = new ReferenceDataStore(referenceData);
    const orderSearchStore = new OrderSearchStore(mockSearchResults);
    const tree = renderer
      .create(
        <SearchOrders 
          orderSearchStore={orderSearchStore}
          referenceDataStore={referenceDataStore} 
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});