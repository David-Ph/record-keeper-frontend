import { Route } from "react-router-dom";

import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";

function Auth() {
  return (
    <div className="mx-auto py-12 w-11/12 max-w-screen-sm">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default Auth;
