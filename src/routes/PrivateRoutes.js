import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ isAuth, component: Component, ...rest }) => {
  const { location } = rest;
  localStorage.setItem("lastPath", `${location.pathname}${location.search}`);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
