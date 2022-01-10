import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";

function Auth() {
  return (
    <div className="mx-auto py-6 w-11/12 max-w-screen-sm">
      <Login />
      <Register />
    </div>
  );
}

export default Auth;
