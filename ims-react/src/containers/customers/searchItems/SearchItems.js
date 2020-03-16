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

const buildLink = (url, linkText) => {
  return(
    <a href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>
  );
};

const mapSelectOptions = (options, labelKey, idKey) => (
  options.map((option) => (
    <option value={option[idKey]}>
      {option[labelKey]}
    </option>
  ))
);

const SearchItems = observer(({itemSearchStore, referenceDataStore}) => {
  let refData = referenceDataStore.referenceData;

  return(
    <Container>
      <Row><h1 class="margin-30">Search Items</h1></Row>
      <Formik
      initialValues={{
        sku: '',
        title: '',
        keyword: '',
        typeOfInventory: '',
        publicationFormat: ''
      }}
      onSubmit={(values) => itemSearchStore.searchItems(values)}
      >
        {formikProps =>
          <Form>
            <CwigCard>
              <Row>
                <Col md={4}>
                  <FormLabel>SKU</FormLabel>
                  <Field placeholder="sku" name="sku"></Field>
                </Col>
                <Col md={4}>
                <FormLabel>Title</FormLabel>
                  <Field placeholder="Title" name="title"></Field>
                </Col>
                <Col md={4}>
                  <FormLabel>Keyword</FormLabel>
                  <Field placeholder="Keyword" name="keyword"></Field>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormLabel>Inventory Type</FormLabel>
                  <Field as="select" name="typeOfInventory">
                    {mapSelectOptions(refData.typesOfInventory, 'productType', 'productTypeID')}
                  </Field>
                </Col>
                <Col md={4}>
                <FormLabel>Publication Format</FormLabel>
                  <Field as="select" name="pulbicationFormat">
                    {mapSelectOptions(refData.publicationFormats, 'format', 'formatID')}
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
      {itemSearchStore.searchResults && <TableContainer component={Paper}>
        <Table aria-label="search customers table">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Onsite Quantity</TableCell>
              <TableCell>Available Quantity</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>HTML</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemSearchStore.searchResults.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.calculatedSKU}</TableCell>
                <TableCell>{row.title} {row.lastNameName}</TableCell>
                <TableCell>{row.qtyOnsite}</TableCell>
                <TableCell>{row.qtyAvailForOrder}</TableCell>
                <TableCell>{buildLink(row.pubPdfUrl, 'PDF')}</TableCell>
                <TableCell>{buildLink(row.pubHtmlUrl, 'HTML')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </Container>
  );
});

export default SearchItems;