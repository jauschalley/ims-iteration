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
  let page = tablePaginationStore.page;
  let rowsPerPage = tablePaginationStore.rowsPerPage;

  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('SKU');
  const [orderByApiField, setOrderByApiField] = React.useState('calculatedSKU');

  const tableHeadCells = [
    {name: 'SKU', apiFieldName: 'calculatedSKU'},
    {name: 'Title', apiFieldName: 'title'},
    {name: 'Onsite Quantity', apiFieldName: 'qtyOnsite'},
    {name: 'Available Quantity', apiFieldName: 'qtyAvailForOrder'},
    {name: 'PDF', apiFieldName: ''},
    {name: 'HTML', apiFieldName: ''}
  ]

  const handleRequestSort = property => event => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
    setOrderByApiField(tableHeadCells.filter( field => field.name == property)[0].apiFieldName)
  };

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
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control placeholder="sku" name="sku"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title" name="title"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Keyword</Form.Label>
                  <Form.Control placeholder="Keyword" name="keyword"></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Inventory Type</Form.Label>
                  <Form.Control as="select" name="typeOfInventory">
                    <option>- Select one -</option> 
                    {mapSelectOptions(refData.typesOfInventory, 'productType', 'productTypeID')}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Publication Format</Form.Label>
                  <Form.Control as="select" name="pulbicationFormat">
                    <option>- Select one -</option> 
                    {mapSelectOptions(refData.publicationFormats, 'format', 'formatID')}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Button className="search" onClick={formikProps.handleSubmit}>Search</Button>
            </CwigCard>
          </Form>
        }
      </Formik>
      {itemSearchStore.searchResults && 
      <div>
      <TableContainer component={Paper}>
        <Table aria-label="search customers table">
          <TableHead>
            <TableRow>
              {tableHeadCells.map( cell => (
                cell.name === 'PDF' || cell.name === 'HTML' ?
                  <TableCell key={cell.name}>
                    {cell.name}
                  </TableCell> :
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
            {stableSort(itemSearchStore.searchResults, order, orderByApiField)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.calculatedSKU}>
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
      </TableContainer>
      <TablePaginationGroup tableRef={itemSearchStore.searchResults}/>
      </div>
      }
    </Container>
  );
});

export default SearchItems;