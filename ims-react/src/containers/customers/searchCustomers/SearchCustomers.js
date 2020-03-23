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
import CwigCard from '../../../components/CwigCard';
import { tablePaginationStore } from '../../../stores/TablePaginationStore';
import TablePaginationGroup from '../../../components/TablePaginationGroup';

const mapSelectOptions = (options, labelKey, idKey) => (
  options.map((option) => (
    <option value={option[idKey]}>
      {option[labelKey]}
    </option>
  ))
);

const SearchCustomers = observer(({customerSearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;
  let page = tablePaginationStore.page;
  let rowsPerPage = tablePaginationStore.rowsPerPage;

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
            <CwigCard>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First Name" name="firstName"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" name="lastName"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Email" name="email"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Organization</Form.Label>
                  <Form.Control placeholder="Organization" name="organization"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                <Form.Label>State</Form.Label>
                  <Form.Control as="select" name="state">
                    {mapSelectOptions(refData.states, 'state', 'stateID')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="Phone Number" name="phone"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
            </CwigCard>
          </Form>
        }
      </Formik>
      {customerSearchStore.searchResults && 
       <div>
      <TableContainer component={Paper}>
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
              {customerSearchStore.searchResults
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
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
        </TableContainer>
        <TablePaginationGroup tableRef={customerSearchStore.searchResults}/>
        </div>
        }
    </Container>
  );
});

export default SearchCustomers;