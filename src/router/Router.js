import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../pages/Auth/Auth";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Auth />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Router;
