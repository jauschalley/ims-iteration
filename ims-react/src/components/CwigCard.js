import React from 'react';
import {Container} from 'react-bootstrap';

const CwigCard = ({children}) => {
  return(
    <Container className="cwig-card">
      {children}
    </Container>
  );
};

export default CwigCard;