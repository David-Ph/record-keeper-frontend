import React, { useRef, Fragment } from "react";
import { Link } from "react-router-dom";

import Textbox from "../UI/Textbox/Textbox";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function Register() {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const registerHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <Textbox>
        <h1 className="font-semibold text-2xl">Register</h1>
      </Textbox>
      <Textbox>
        <section>
          <form onSubmit={registerHandler}>
            <Input
              label="Username:"
              ref={usernameInputRef}
              input={{
                id: "username",
                type: "text",
                minLength: "3",
                maxLength: "25",
              }}
            />
            <Input
              label="Email:"
              ref={emailInputRef}
              input={{
                id: "email",
                type: "email",
                minLength: "1",
              }}
            />
            <Input
              label="Password:"
              ref={passwordInputRef}
              input={{
                id: "password",
                type: "password",
                minLength: "6",
              }}
            />
            <Input
              label="Confirm Password:"
              ref={confirmPasswordInputRef}
              input={{
                id: "confirmPassword",
                type: "password",
                minLength: "6",
              }}
            />
            <Button type="submit">Register</Button>
          </form>
        </section>
        <p className="text-xs mt-2 text-right">
          <Link style={{ color: "blue" }} to="/login">
            Click here
          </Link>{" "}
          to sign in!
        </p>
      </Textbox>
    </Fragment>
  );
}

export default Register;
