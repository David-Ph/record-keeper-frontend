import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../config/Routes";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import useHttp from "../../hooks/useHttp";
import { editProfile } from "../../lib/api";
import { usernameValidator } from "../../helper/validators/AuthValidator";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function ProfileForm(props) {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const usernameStates = useInput(usernameValidator);
  const { sendRequest, error, status } = useHttp(editProfile);

  const currentUsername = AuthCtx.user?.username;
  const formIsValid = usernameStates.validity.isValid;

  useEffect(() => {
    if (currentUsername) {
      usernameStates.setValueHandler(currentUsername);
    }
  }, [currentUsername]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const userData = {
        username: usernameStates.value || AuthCtx.user.username,
      };

      const response = await sendRequest(userData, AuthCtx.token);

      if (response?.status === 201) {
        AuthCtx.login(AuthCtx.token, response.data.newData);
        history.replace(Routes.DASHBOARD_MAIN);
      }
    }
  };

  const title = props.mode === "edit" ? "Edit" : "Add";

  return (
    <Modal onClick={props.onHide}>
      <section>
        <form onSubmit={submitHandler}>
          <p>Are you sure?</p>
          {status === "pending" ? (
            <LoadingSpinner />
          ) : (
            <div className="buttons">
              <Button type="submit">Submit</Button>
              <Button type="button" color="bg-primary hover:text-white">
                Cancel
              </Button>
            </div>
          )}
        </form>
      </section>
    </Modal>
  );
}

export default ProfileForm;