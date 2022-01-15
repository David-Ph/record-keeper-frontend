import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../config/Routes";

import Auth from "../pages/Auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";

function Router() {
  const isLoggedIn = false;

  return (
    <Switch>
      <Route path="/" exact>
        {!isLoggedIn && <Redirect to={Routes.AUTH_LOGIN} />}
        {isLoggedIn && <Redirect to={Routes.DASHBOARD_MAIN} />}
      </Route>
      <Route path="/auth">
        {isLoggedIn && <Redirect to={Routes.DASHBOARD_MAIN} />}
        {!isLoggedIn && <Auth />}
      </Route>
      <Route path="/dashboard">
        {!isLoggedIn && <Redirect to={Routes.AUTH_LOGIN} />}
        {isLoggedIn && <Dashboard />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Router;
