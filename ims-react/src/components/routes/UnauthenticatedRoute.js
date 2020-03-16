import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const UnauthenticatedRoute = ({component: C, props: cProps, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => <C {...props} {...cProps} /> }
    />
  );
};

UnauthenticatedRoute.propTypes = {
  component: PropTypes.any,
  props: PropTypes.object
};
  
export default UnauthenticatedRoute; 
  
