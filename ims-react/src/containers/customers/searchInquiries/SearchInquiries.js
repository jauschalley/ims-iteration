import React from 'react';
import {observer} from "mobx-react";
import {Formik, Field} from 'formik';
import {Row, Container, Col, Form, FormLabel, Button} from 'react-bootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CwigCard from '../../../components/CwigCard';
import { tablePaginationStore } from '../../../stores/TablePaginationStore';
import TablePaginationGroup from '../../../components/TablePaginationGroup';
import {stableSort} from '../../../components/TableSortGroup';

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

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('Inquiry ID');
  const [orderByApiField, setOrderByApiField] = React.useState('inquiryID');

  const tableHeadCells = [
    {name: 'Inquiry ID', apiFieldName: 'inquiryID'},
    {name: 'Name', apiFieldName: 'firstName'},
    {name: 'Organization', apiFieldName: 'organization'},
    {name: 'Email', apiFieldName: 'email'}
  ]

  const handleRequestSort = property => event => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
    setOrderByApiField(tableHeadCells.filter( field => field.name == property)[0].apiFieldName)
  };

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
              <Row>
                <Col md={4}>
                  <FormLabel>Inquiry Number</FormLabel>
                  <Field placeholder="Inquiry Number" name="inquiryNumber"></Field>
                </Col>
                <Col md={4}>
                <FormLabel>First Name</FormLabel>
                  <Field placeholder="First Name" name="firstName"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Field placeholder="Last Name" name="lastName"></Field>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormLabel>Email</FormLabel>
                  <Field placeholder="Email" name="email"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>State</FormLabel>
                  <Field as="select" name="state">
                    {mapSelectOptions(refData.states, 'state', 'stateID')}
                  </Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Assigned To</FormLabel>
                  <Field placeholder="Assigned To" name="assignedTo"></Field>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormLabel>Date Range</FormLabel>
                  <Field placeholder="Date From" name="dateFrom"></Field>
                  <Field placeholder="Date To" name="dateTo"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Status</FormLabel>
                  <Field as="select" name="status">
                    <option value='0'>Open</option>
                    <option value='1'>Closed</option>
                  </Field>
                </Col>
              </Row>
              <Row>
                <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
              </Row>
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
              {tableHeadCells.map( cell => (
                  <TableCell key={cell.name}>
                    <TableSortLabel
                      active={true}
                      direction={orderBy === cell.name ? order : 'asc'}
                      onClick={handleRequestSort(cell.name)}
                    >
                      {cell.name}
                    </TableSortLabel>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(inquirySearchStore.searchResults, order, orderByApiField)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.inquiryID}>
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