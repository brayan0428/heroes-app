import React from "react";
import { Route } from "react-router-dom";
import { LayoutDashboard } from "../components/LayoutDashboard";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuthContext } from "../auth/AuthContext";

export const DashboardRoutes = ({ component: Component, ...rest }) => {
  const [user] = useAuthContext();

  return (
    <PrivateRoutes
      {...rest}
      isAuth={user.logged}
      component={(props) => (
        <LayoutDashboard>
          <Component {...props} />
        </LayoutDashboard>
      )}
    />
  );
};
