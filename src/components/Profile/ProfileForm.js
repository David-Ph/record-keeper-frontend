import React, { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../config/Routes";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import useHttp from "../../hooks/useHttp";
import { editProfile } from "../../lib/api";
import { usernameValidator } from "../../helper/validators/AuthValidator";
import { avatarValidator } from "../../helper/validators/AuthValidator";

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
  const avatarStates = useInput(avatarValidator);
  const avatarRef = useRef(null);
  const { sendRequest, error, status } = useHttp(editProfile);

  const currentUsername = AuthCtx.user?.username;

  useEffect(() => {
    if (currentUsername) {
      usernameStates.setValueHandler(currentUsername);
    }
  }, [currentUsername]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      username: usernameStates.value || AuthCtx.user.username,
      avatar: avatarStates.value || AuthCtx.user.avatar,
    };

    const response = await sendRequest(userData, AuthCtx.token);

    if (response?.status === 201) {
      AuthCtx.login(AuthCtx.token, response.data.newData);
      history.replace(Routes.DASHBOARD_MAIN);
    }
  };

  return (
    <Modal onClick={props.onHideProfile}>
      <Title>Edit Profile</Title>
      <section>
        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <Input
            label="Edit Username:"
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
            label="Avatar:"
            ref={avatarRef}
            isValid={avatarStates.validity.isValid}
            onChange={avatarStates.fileChangeHandler}
            onBlur={avatarStates.valueInputBlurHandler}
            input={{
              id: "avatar",
              type: "file",
              accept: "image/*",
            }}
          />
          {avatarStates.hasError && (
            <ErrorMessage message={avatarStates.validity.message} />
          )}

          {error && <ErrorMessage message={error} />}

          {status === "pending" ? (
            <LoadingSpinner />
          ) : (
            <div className="buttons">
              <Button type="submit">Submit</Button>
              <Button onClick={props.onHideProfile} type="button" color="bg-primary hover:text-white">
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
