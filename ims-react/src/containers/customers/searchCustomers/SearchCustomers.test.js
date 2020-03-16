import React from 'react';
import renderer from 'react-test-renderer';
import SearchCustomers from './SearchCustomers';
import referenceData from '../newInquiry/mockReferenceData';
import ReferenceDataStore from '../../../stores/ReferenceDataStore';
import CustomerSearchStore from '../../../stores/CustomerSearchStore';

describe('<SearchCustomers />', () => {
  it('renders correctly', () => {
    const referenceDataStore = new ReferenceDataStore(referenceData);
    const customerSearchStore = new CustomerSearchStore();
    const tree = renderer
      .create(
        <SearchCustomers 
          customerSearchStore={customerSearchStore}
          referenceDataStore={referenceDataStore} 
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});