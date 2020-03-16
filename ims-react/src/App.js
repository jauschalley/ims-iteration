import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Routes from './Routes';
import './App.css';
import Header from './containers/header/Header';
import BaseStore from './stores/BaseStore';
import AuthStore from './stores/AuthStore';
import ReferenceDataStore from './stores/ReferenceDataStore';
import CustomerDashboardStore from './stores/CustomerDashboardStore';
import CustomerSearchStore from './stores/CustomerSearchStore';
import OrderSearchStore from './stores/OrderSearchStore';
import InquirySearchStore from './stores/InquirySearchStore';
import ItemSearchStore from './stores/ItemSearchStore';
import NewInquiryStore from './stores/NewInquiryStore';

class App extends Component {
  render() {
    const childProps = {
      user: 'Josh',
      baseStore: new BaseStore(),
      authStore: new AuthStore(),
      referenceDataStore: new ReferenceDataStore(),
      customerDashboardStore: new CustomerDashboardStore(),
      customerSearchStore: new CustomerSearchStore(),
      orderSearchStore: new OrderSearchStore(),
      inquirySearchStore: new InquirySearchStore(),
      itemSearchStore: new ItemSearchStore(),
      newInquiryStore: new NewInquiryStore()
    };
    return (
      <div className="App">
        <Header {...childProps}/>
        <Container fluid>
          <Routes childProps={childProps} />
        </Container>
      </div>
    );
  }
}

export default withRouter(App);