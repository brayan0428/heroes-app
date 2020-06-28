import React from "react";
import "../assets/css/LoginForm.css";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContext";
import { AUTH_LOGIN } from "../types";

export const LoginForm = () => {
  const history = useHistory();
  const [user, dispatch] = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const lastPath = localStorage.getItem("lastPath") || "/marvel";
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        name: "Brayan Llanos",
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="LoginForm">
      <div className="LoginForm__container">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Password"
          />
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};
