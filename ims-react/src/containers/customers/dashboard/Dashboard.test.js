import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import CustomerDashboardStore from '../../../stores/CustomerDashboardStore';
import mockClosedInquiries from './mockClosedInquiries';
import mockOpenInquiries from './mockOpenInquiries';

describe('<Dashboard />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Dashboard customerDashboardStore={new CustomerDashboardStore(mockClosedInquiries, mockOpenInquiries)} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});