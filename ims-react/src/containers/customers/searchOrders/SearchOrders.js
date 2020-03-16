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

const SearchOrders = observer(({orderSearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;

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
              <Row>
                <Col md={4}>
                  <FormLabel>Order Status</FormLabel>
                  <Field as="select" name="orderStatus">
                    {mapSelectOptions(refData.orderStatuses, 'status', 'id')}
                  </Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Order Type</FormLabel>
                  <Field as="select" name="orderStatus">
                    {mapSelectOptions(refData.orderTypes, 'orderType', 'typeID')}
                  </Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Order ID</FormLabel>
                  <Field placeholder="Order ID" name="orderId"></Field>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormLabel>Customer First Name</FormLabel>
                  <Field placeholder="First Name" name="customerFirstName"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Customer Last Name</FormLabel>
                  <Field placeholder="Last Name" name="customerLastName"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Customer Zip Code</FormLabel>
                  <Field placeholder="Zip Code" name="zipCode"></Field>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormLabel>Date Range</FormLabel>
                  <Field placeholder="Date From" name="dateFrom"></Field>
                  <Field placeholder="Date To" name="dateTo"></Field>
                </Col>
              </Row>
              <Row>
                <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
              </Row>
            </CwigCard>
          </Form>
        }
      </Formik>
      {orderSearchStore.searchResults && <TableContainer component={Paper}>
        <Table aria-label="search customers table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderSearchStore.searchResults.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.orderID}</TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.firstName} {row.lastNameName}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </Container>
  );
});

export default SearchOrders;