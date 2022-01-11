import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import useInput from "../../hooks/useInput";
import {
  usernameValidator,
  passwordValidator,
  confirmPasswordValidator,
  emailValidator,
} from "../../helper/validators/AuthValidator";

import Textbox from "../UI/Textbox/Textbox";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";

function Register() {
  const usernameStates = useInput(usernameValidator);
  const emailStates = useInput(emailValidator);
  const passwordStates = useInput(passwordValidator);
  const confirmPasswordStates = useInput(confirmPasswordValidator);

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
              isValid={usernameStates.validity.isValid}
              onChange={usernameStates.valueChangeHandler}
              onBlur={usernameStates.valueInputBlurHandler}
              input={{
                id: "username",
                type: "text",
                minLength: "3",
                maxLength: "25",
                value: usernameStates.value,
              }}
            />
            {usernameStates.hasError && (
              <ErrorMessage message={usernameStates.validity.message} />
            )}
            <Input
              label="Email:"
              isValid={emailStates.validity.isValid}
              onChange={emailStates.valueChangeHandler}
              onBlur={emailStates.valueInputBlurHandler}
              input={{
                id: "email",
                type: "email",
                minLength: "1",
                value: emailStates.value,
              }}
            />
            {emailStates.hasError && (
              <ErrorMessage message={emailStates.validity.message} />
            )}
            <Input
              label="Password:"
              isValid={passwordStates.validity.isValid}
              onChange={passwordStates.valueChangeHandler}
              onBlur={passwordStates.valueInputBlurHandler}
              input={{
                id: "password",
                type: "password",
                minLength: "6",
                value: passwordStates.value,
              }}
            />
            {passwordStates.hasError && (
              <ErrorMessage message={passwordStates.validity.message} />
            )}
            <Input
              label="Confirm Password:"
              isValid={confirmPasswordStates.validity.isValid}
              onChange={confirmPasswordStates.valueChangeHandler}
              onBlur={confirmPasswordStates.valueInputBlurHandler}
              input={{
                id: "confirmPassword",
                type: "password",
                minLength: "6",
                value: confirmPasswordStates.value,
              }}
            />
            {confirmPasswordStates.hasError && (
              <ErrorMessage message={confirmPasswordStates.validity.message} />
            )}
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
