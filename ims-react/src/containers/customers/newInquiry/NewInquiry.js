import React from 'react';
import {Container, Row} from 'react-bootstrap';
import InquiryForm from './components/InquiryForm';

const NewInquiry = ({referenceDataStore, customerSearchStore}) => {
  return(
    <div className="new-inquiry">
      <Container>
        <Row><h1 className="margin-30">New Inquiry</h1></Row>
        {<InquiryForm referenceData={referenceDataStore.referenceData} customerSearchStore={customerSearchStore} />}
      </Container>
    </div>
  );
};

export default NewInquiry;