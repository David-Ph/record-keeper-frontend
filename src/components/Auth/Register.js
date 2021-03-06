import React, { Fragment, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../../config/Routes";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import {
  usernameValidator,
  passwordValidator,
  emailValidator,
} from "../../helper/validators/AuthValidator";
import useHttp from "../../hooks/useHttp";
import { register } from "../../lib/api";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Title from "../UI/Typography/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function Register() {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const usernameStates = useInput(usernameValidator);
  const emailStates = useInput(emailValidator);
  const passwordStates = useInput(passwordValidator);
  const confirmPasswordStates = useInput(passwordValidator);
  
  const { sendRequest, status, error } = useHttp(register);

  const formIsValid =
    emailStates.validity.isValid &&
    passwordStates.validity.isValid &&
    confirmPasswordStates.validity.isValid;

  const registerHandler = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      const userData = {
        username: usernameStates.value,
        email: emailStates.value,
        password: passwordStates.value,
      };

      const response = await sendRequest(userData);

      if (response?.status === 200) {
        AuthCtx.login(response.data.token, response.data.currentUser);
        history.replace(Routes.DASHBOARD_MAIN);
      }
    }
  };

  return (
    <Fragment>
      <SectionBlock>
        <Title>Register</Title>
      </SectionBlock>
      <SectionBlock>
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
            {confirmPasswordStates.value !== passwordStates.value && (
              <ErrorMessage message="Password Does Not Match" />
            )}

            {error && <ErrorMessage message={error} />}

            {status === "pending" ? (
              <LoadingSpinner />
            ) : (
              <Button type="submit">Register</Button>
            )}
          </form>
        </section>
        <p className="text-xs mt-2 text-right">
          <Link style={{ color: "blue" }} to={Routes.AUTH_LOGIN}>
            Click here
          </Link>{" "}
          to sign in!
        </p>
      </SectionBlock>
    </Fragment>
  );
}

export default Register;
