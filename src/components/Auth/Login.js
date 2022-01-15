import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../config/Routes";

import useInput from "../../hooks/useInput";
import {
  passwordValidator,
  emailValidator,
} from "../../helper/validators/AuthValidator";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
import { login } from "../../lib/api";

import Textbox from "../UI/Textbox/Textbox";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function Login() {
  const AuthCtx = useContext(AuthContext);
  const emailStates = useInput(emailValidator);
  const passwordStates = useInput(passwordValidator);

  const { sendRequest, error, status } = useHttp(login);

  const loginHandler = async (event) => {
    event.preventDefault();
    const userData = {
      email: emailStates.value,
      password: passwordStates.value,
    };

    const response = await sendRequest(userData);

    if (response.status === 200) {
      AuthCtx.login(response.data.token, response.data.currentUser);
    }
  };

  return (
    <Fragment>
      <Textbox>
        <h1 className="font-semibold text-2xl">Login</h1>
      </Textbox>
      <Textbox>
        <section>
          <form onSubmit={loginHandler}>
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

            {error && <ErrorMessage message={error} />}

            {status === "pending" ? (
              <LoadingSpinner />
            ) : (
              <Button type="submit">Login</Button>
            )}
          </form>
        </section>
        <p className="text-xs mt-2 text-right">
          Don't have an account yet?{" "}
          <Link style={{ color: "blue" }} to={Routes.AUTH_REGISTER}>
            Register here!
          </Link>
        </p>
      </Textbox>
    </Fragment>
  );
}

export default Login;
