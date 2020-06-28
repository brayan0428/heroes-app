import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { Marvel } from "./pages/Marvel";
import { Login } from "./pages/Login";
import { DC } from "./pages/DC";
import { Hero } from "./pages/Hero";
import { Search } from "./pages/Search";
import { useAuthContext } from "./auth/AuthContext";
import { PublicRoutes } from "./routes/PublicRoutes";

const App = () => {
  const [user] = useAuthContext();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes isAuth={user.logged} exact component={Login} path="/" />
        <DashboardRoutes exact component={Marvel} path="/marvel" />
        <DashboardRoutes exact component={DC} path="/dc" />
        <DashboardRoutes exact component={Hero} path="/hero/:id" />
        <DashboardRoutes exact component={Search} path="/search" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
