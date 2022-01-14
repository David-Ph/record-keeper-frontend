import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./Routes";

import Auth from "../pages/Auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";

function Router() {
  const isLoggedIn = false;

  return (
    <Switch>
      <Route path="/" exact>
        {!isLoggedIn && <Redirect to="/auth/login" />}
        {isLoggedIn && <Redirect to="/dashboard" />}
      </Route>
      <Route path="/auth">
        {isLoggedIn && <Redirect to="/dashboard" />}
        {!isLoggedIn && <Auth />}
      </Route>
      <Route path="/dashboard">
        {!isLoggedIn && <Redirect to="/auth/login" />}
        {isLoggedIn && <Dashboard />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Router;
