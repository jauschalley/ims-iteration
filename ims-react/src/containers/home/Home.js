import React from 'react';
import {Col, Container} from 'react-bootstrap';
import {observer} from 'mobx-react';

const Home = (props) => {
 
  return(
    <Container fluid className="home text-align-left">
      <Col md={4}>
        <h1>Home</h1>
      </Col>
    </Container>
  );
};

export default observer(Home);