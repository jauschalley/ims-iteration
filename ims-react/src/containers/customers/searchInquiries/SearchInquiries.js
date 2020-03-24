import React from 'react';
import {observer} from "mobx-react";
import {Formik} from 'formik';
import {Row, Container, Col, Form, Button} from 'react-bootstrap';
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
      <Row><h1 className="margin-30">Search Inquiries</h1></Row>
      <Formik
      initialValues={{
        inquiryID: '',
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
                  <Form.Control placeholder="Inquiry Number" name="inquiryID" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First Name" name="firstName" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" name="lastName" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Email" name="email" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" name="state" onChange={formikProps.handleChange}>
                    <option>- Select one -</option> 
                    {mapSelectOptions(refData.states, 'state', 'stateID')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Assigned To</Form.Label>
                  <Form.Control placeholder="Assigned To" name="assignedTo" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Date Range</Form.Label>
                  <Form.Control placeholder="Date From" name="dateFrom"></Form.Control>
                  <Form.Control placeholder="Date To" name="dateTo" onChange={formikProps.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" name="status" onChange={formikProps.handleChange}>
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