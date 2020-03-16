import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {observer} from 'mobx-react';

const Header = (props) => (
  <div className="header container-fluid sticky">
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#home">Information Management System</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Customer Management" id="basic-nav-dropdown">
            <NavDropdown.Item href="/customer-management">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="/customer-management/new-inquiry">New Inquiry</NavDropdown.Item>
            <NavDropdown.Item href="/customer-management/search-customers">Search Customers</NavDropdown.Item>
            <NavDropdown.Item href="/customer-management/search-items">Search Items</NavDropdown.Item>
            <NavDropdown.Item href="/customer-management/search-inquiries">Search Inquiries</NavDropdown.Item>
            <NavDropdown.Item href="/customer-management/search-orders">Search Orders</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Inventory Management" id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title="Kit Management" id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title="Conference Management" id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title="Reports Management" id="basic-nav-dropdown"></NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => props.authStore.logout(() => window.location = '/login')} href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default observer(Header);