import React, { useRef, Fragment } from "react";
import { Link } from "react-router-dom";

import Textbox from "../UI/Textbox/Textbox";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <Fragment>
      <Textbox>
        <h1 className="font-semibold text-2xl">Login</h1>
      </Textbox>
      <Textbox>
        <section>
          <form>
            <Input
              label="Email:"
              ref={emailInputRef}
              input={{
                id: "email",
                type: "email",
                minLength: "1"
              }}
            />
            <Input
              label="Password:"
              ref={passwordInputRef}
              input={{
                id: "password",
                type: "password",
                minLength: "6"
              }}
            />
            <Button type="submit">Login</Button>
          </form>
        </section>
        <p className="text-xs mt-2 text-right">
          Don't have an account yet?{" "}
          <Link style={{ color: "blue" }} to="/register">
            Register here!
          </Link>
        </p>
      </Textbox>
    </Fragment>
  );
}

export default Login;
