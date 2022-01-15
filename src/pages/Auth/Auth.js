import { Route } from "react-router-dom";
import { Routes } from "../../config/Routes";

import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";

function Auth() {
  return (
    <div className="mx-auto py-12 w-11/12 max-w-screen-sm transition-all">
      <Route path={Routes.AUTH_LOGIN}>
        <Login />
      </Route>
      <Route path={Routes.AUTH_REGISTER}>
        <Register />
      </Route>
    </div>
  );
}

export default Auth;
