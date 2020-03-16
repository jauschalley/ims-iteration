import React from 'react';
import {observer} from "mobx-react";
import {Formik, Field} from 'formik';
import {Row, Container, Col, Form, FormLabel, Button} from 'react-bootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const mapSelectOptions = (options, labelKey, idKey) => (
  options.map((option) => (
    <option value={option[idKey]}>
      {option[labelKey]}
    </option>
  ))
);

const SelectableSearchCustomers = observer(({customerSearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;
  
  return(
    <Container>
      <Row><h1 class="margin-30">Search Customers</h1></Row>
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        state: '',
        phone: '',
        olderRecords: false
      }}
      onSubmit={(values) => customerSearchStore.searchCustomers(values)}
      >
        {formikProps =>
          <Form>
            <Row>
              <Col md={4}>
                <FormLabel>First Name</FormLabel>
                <Field placeholder="First Name" name="firstName"></Field>
              </Col>
              <Col md={4}>






                <CwigCard></CwigCard>
                <FormLabel>Last Name</FormLabel>
                <Field placeholder="Last Name" name="lastName"></Field>
              </Col>
              <Col md={4}>
                <FormLabel>Email</FormLabel>
                <Field placeholder="Email" name="email"></Field>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormLabel>Organization</FormLabel>
                <Field placeholder="Organization" name="organization"></Field>
              </Col>
              <Col md={4}>
              <FormLabel>State</FormLabel>
                <Field as="select" name="state">
                  {mapSelectOptions(refData.states, 'state', 'stateID')}
                </Field>
              </Col>
              <Col md={4}>
                <FormLabel>Phone Number</FormLabel>
                <Field placeholder="Phone Number" name="phone"></Field>
              </Col>
            </Row>
            <Row>
              <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
            </Row>
          </Form>
        }
      </Formik>
      {customerSearchStore.searchResults && <TableContainer component={Paper}>
          <Table aria-label="search customers table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerSearchStore.searchResults.map(row => (
                <TableRow key={row.name}>
                  <TableCell>{row.customerID}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
    </Container>
  );
});

export default SelectableSearchCustomers;