import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContext";
import { AUTH_LOGOUT } from "../types";

export const Navbar = () => {
  const [user, dispatch] = useAuthContext();
  const history = useHistory();

  const { name } = user;

  const handleLogout = () => {
    dispatch({
      type: AUTH_LOGOUT,
      payload: {},
    });
    history.replace("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
        <div>
          <a className="nav-link text-white font-weight-bold d-inline">
            {name}
          </a>
          <a
            onClick={handleLogout}
            className="nav-link text-white d-inline"
            style={{ cursor: "pointer" }}
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};
