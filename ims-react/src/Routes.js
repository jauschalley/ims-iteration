import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './containers/login/Login';
import Dashboard from './containers/customers/dashboard/Dashboard';
import NewInquiry from './containers/customers/newInquiry/NewInquiry';
import ViewInquiry from './containers/customers/viewInquiry/ViewInquiry';
import SearchCustomers from './containers/customers/searchCustomers/SearchCustomers';
import SearchInquiries from './containers/customers/searchInquiries/SearchInquiries';
import SearchItems from './containers/customers/searchItems/SearchItems';
import SearchOrders from './containers/customers/searchOrders/SearchOrders';

import Home from './containers/home/Home';
import UnauthenticatedRoute from './components/routes/UnauthenticatedRoute';
import AuthenticatedRoute from './components/routes/AuthenticatedRoute';

const UnauthenticatedRoutes = {
  home: '/home'
};

const Routes = ({childProps}) =>
  <Switch>
    <UnauthenticatedRoute path='/login' exact component={Login} props={childProps} />
    <AuthenticatedRoute path='/home' exact component={Home} props={childProps} />

    <AuthenticatedRoute path="/customer-management" exact component={Dashboard} props={childProps}/>
    <AuthenticatedRoute path="/customer-management/new-inquiry" exact component={NewInquiry} props={childProps} />
    <AuthenticatedRoute path="/customer-management/view-inquiry" exact component={ViewInquiry} props={childProps} />
    <AuthenticatedRoute path="/customer-management/search-customers" exact component={SearchCustomers} props={childProps} />
    <AuthenticatedRoute path="/customer-management/search-items" exact component={SearchItems} props={childProps} />
    <AuthenticatedRoute path="/customer-management/search-inquiries" exact component={SearchInquiries} props={childProps} />
    <AuthenticatedRoute path="/customer-management/search-orders" exact component={SearchOrders} props={childProps} />

    <Redirect to='/'/>
  </Switch>;

Routes.propTypes = {
  childProps: PropTypes.object
};
  
export {UnauthenticatedRoutes};
export default Routes; 