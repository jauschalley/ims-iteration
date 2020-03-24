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
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import CwigCard from '../../../components/CwigCard';
import { tablePaginationStore } from '../../../stores/TablePaginationStore';
import TablePaginationGroup from '../../../components/TablePaginationGroup';
import {stableSort} from '../../../components/TableSortGroup';

const SearchOrders = observer(({orderSearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;
  let page = tablePaginationStore.page;
  let rowsPerPage = tablePaginationStore.rowsPerPage;

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('Order ID');
  const [orderByApiField, setOrderByApiField] = React.useState('orderID');

  const tableHeadCells = [
    {name: 'Order ID', apiFieldName: 'orderID'},
    {name: 'Order Date', apiFieldName: 'orderDate'},
    {name: 'Customer', apiFieldName: 'firstName'},
    {name: 'Status', apiFieldName: 'status'},
  ]

  const handleRequestSort = property => event => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
    setOrderByApiField(tableHeadCells.filter( field => field.name == property)[0].apiFieldName)
  };

  const mapSelectOptions = (options, labelKey, idKey) => (
    options.map((option) => (
      <option value={option[idKey]}>
        {option[labelKey]}
      </option>
    ))
  );

  return(
    <Container>
      <Row><h1 class="margin-30">Search Orders</h1></Row>
      <Formik initialValues={{
        orderStatus:'',
        orderType: '',
        orderId: '',
        customerFirstName: '',
        customerLastName: '',
        zipCode: '',
        dateFrom: '',
        dateTo: ''
      }}
      onSubmit={(values) => orderSearchStore.searchOrders(values)}
      >
        {formikProps =>
          <Form>
            <CwigCard>
              <Form.Row>
              <Form.Group as={Col} md="4">
                  <Form.Label>Order Status</Form.Label>
                  <Form.Control as="select" name="orderStatus">
                    {mapSelectOptions(refData.orderStatuses, 'status', 'id')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Order Type</Form.Label>
                  <Form.Control as="select" name="orderStatus">
                    {mapSelectOptions(refData.orderTypes, 'orderType', 'typeID')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Order ID</Form.Label>
                  <Form.Control placeholder="Order ID" name="orderId"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Customer First Name</Form.Label>
                  <Form.Control placeholder="First Name" name="customerFirstName"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Customer Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" name="customerLastName"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Customer Zip Code</Form.Label>
                  <Form.Control placeholder="Zip Code" name="zipCode"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Date Range</Form.Label>
                  <Form.Control placeholder="Date From" name="dateFrom"></Form.Control>
                  <Form.Control placeholder="Date To" name="dateTo"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
            </CwigCard>
          </Form>
        }
      </Formik>
      {orderSearchStore.searchResults && 
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
            {stableSort(orderSearchStore.searchResults, order, orderByApiField)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.orderID}>
                  <TableCell>{row.orderID}</TableCell>
                  <TableCell>{row.orderDate}</TableCell>
                  <TableCell>{row.firstName} {row.lastNameName}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaginationGroup tableRef={orderSearchStore.searchResults}/>
      </div>}
    </Container>
  );
});

export default SearchOrders;