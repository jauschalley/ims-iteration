import React from 'react';
import moment from 'moment';
import {observer} from "mobx-react";
import {Row, Col, Container} from 'react-bootstrap';
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

const Dashboard = observer(({customerDashboardStore}) => {
  customerDashboardStore.fetchDashboardStatistics();

  let {week, month, quarter, year} = customerDashboardStore.loading? {} : customerDashboardStore.dashboardStatistics;
  let openInquiries = customerDashboardStore.loading? {} : customerDashboardStore.openInquiries;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return(
    customerDashboardStore.loading ? 
    <span>Loading</span> :
    <Container>
      <Row><h1 class="margin-30">Customer Dashboard</h1></Row>
      <CwigCard>
        <Row>
          <h3>Count of Inquiries</h3>
        </Row>
        <Row>
          <Col md="3">
            <p>Week: {week}</p>
          </Col>
          <Col md="3">
            <p>Month: {month}</p>
          </Col>
          <Col md="3">
            <p>Quarter: {quarter}</p>
          </Col>
          <Col md="3">
            <p>Year: {year}</p>
          </Col>
        </Row>
      </CwigCard>
      <CwigCard>
        <Row>
          <h3>Open Inquiries</h3>
        </Row>
        <TableContainer component={Paper}>
          <Table aria-label="open inquiries table">
            <TableHead>
              <TableRow>
                <TableCell>Inquiry Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Last Action</TableCell>
                <TableCell>Assigned To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {openInquiries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.name}>
                  <TableCell>{moment(row.inquiryDate).subtract(10, 'days').calendar()}</TableCell>
                  <TableCell>{row.firstName} {row.lastName}</TableCell>
                  <TableCell>{row.inquiryID}</TableCell>
                  <TableCell>{moment(row.statusChangeDate).subtract(10, 'days').calendar()}</TableCell>
                  <TableCell>{row.assignedTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationGroup tableRef={openInquiries}/>
      </CwigCard>
    </Container>
  );
});

export default Dashboard;