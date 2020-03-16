import React from 'react';
import {Col, Container, Row, Form, FormLabel, Button} from 'react-bootstrap';
import {observer} from 'mobx-react';
import {Formik, Field} from 'formik';

const Login = (props) => {
  return(
    <Container fluid className="login text-align-left">
      <Col md={4}>
        <h1>Login</h1>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => props.authStore.login(values.email, values.password, () => window.location = '/home')}
        >
          {
            formikProps => 
              <Form>
                <Row>
                  <FormLabel>Email:</FormLabel>
                  <Field id="email" name="email" type="email" required/>
                </Row>
                <Row>
                  <FormLabel>Password:</FormLabel>
                  <Field id="password" name="password" type="password" required/>
                </Row>
                <Row>
                  <Button onClick={formikProps.handleSubmit}>Login</Button>
                </Row>
              </Form>
          }
        </Formik>
      </Col>
    </Container>
  );
};

export default observer(Login);