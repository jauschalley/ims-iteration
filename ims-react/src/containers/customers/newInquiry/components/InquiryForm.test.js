import React from 'react';
import renderer from 'react-test-renderer';
import InquiryForm from './InquiryForm';
import referenceData from '../mockReferenceData';

describe('<InquiryForm />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <InquiryForm referenceData={referenceData}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});