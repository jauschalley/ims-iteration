import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const AuthenticatedRoute = ({component: C, props: cProps, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      cProps.authStore.loggedIn
        ? <C {...props} {...cProps} />
        : <Redirect
          to={'/login'}
        />}
  />;

AuthenticatedRoute.propTypes = {
  component: PropTypes.any,
  props: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string
  })
};
  
export default observer(AuthenticatedRoute); 