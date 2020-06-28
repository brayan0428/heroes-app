import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import App from "./App";
import { Provider } from "./auth/AuthContext";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
