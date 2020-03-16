import React from 'react';
import {Container, Row} from 'react-bootstrap';
import InquiryForm from './components/InquiryForm';

const NewInquiry = ({referenceDataStore}) => {
  return(
    <div className="new-inquiry">
      <Container>
        <Row><h1 class="margin-30">New Inquiry</h1></Row>
        {<InquiryForm referenceData={referenceDataStore.referenceData}/>}
      </Container>
    </div>
  );
};

export default NewInquiry;