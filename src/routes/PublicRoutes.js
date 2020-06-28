import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PublicRoutes = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/marvel" />
      }
    />
  );
};

PublicRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
