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

const SearchInquiries = observer(({inquirySearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;
  let page = tablePaginationStore.page;
  let rowsPerPage = tablePaginationStore.rowsPerPage;

  return(
    <Container>
      <Row><h1 class="margin-30">Search Inquiries</h1></Row>
      <Formik
      initialValues={{
        inquiryNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        state: '',
        assignedTo: '',
        dateTo: '',
        dateFrom: '',
        status: ''
      }}
      onSubmit={(values) => inquirySearchStore.searchInquiries(values)}
      >
        {formikProps =>
          <Form>
            <CwigCard>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Inquiry Number</Form.Label>
                  <Form.Control placeholder="Inquiry Number" name="inquiryNumber"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First Name" name="firstName"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" name="lastName"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Email" name="email"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" name="state">
                    {mapSelectOptions(refData.states, 'state', 'stateID')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Assigned To</Form.Label>
                  <Form.Control placeholder="Assigned To" name="assignedTo"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Date Range</Form.Label>
                  <Form.Control placeholder="Date From" name="dateFrom"></Form.Control>
                  <Form.Control placeholder="Date To" name="dateTo"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" name="status">
                    <option value='0'>Open</option>
                    <option value='1'>Closed</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
            </CwigCard>
          </Form>
        }
      </Formik>
      {inquirySearchStore.searchResults && 
      <div>
      <TableContainer component={Paper}>
        <Table aria-label="search customers table">
          <TableHead>
            <TableRow>
              <TableCell>Inquiry ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Organization</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquirySearchStore.searchResults
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.inquiryID}</TableCell>
                <TableCell>{row.firstName} {row.lastNameName}</TableCell>
                <TableCell>{row.organization}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaginationGroup tableRef={inquirySearchStore.searchResults}/>
      </div>
      }
    </Container>
  );
});

export default SearchInquiries;