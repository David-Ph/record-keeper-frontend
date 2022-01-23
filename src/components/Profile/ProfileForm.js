import React, { useContext, useEffect, useRef } from "react";

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

function ProfileForm(props) {
  const AuthCtx = useContext(AuthContext);
  const usernameStates = useInput(usernameValidator);
  const avatarStates = useInput(avatarValidator);
  const avatarRef = useRef(null);
  const { sendRequest } = useHttp(editProfile);

  const currentUsername = AuthCtx.user?.username;

  useEffect(() => {
    if (currentUsername) {
      usernameStates.setValueHandler(currentUsername);
    }
  }, [currentUsername]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      username: usernameStates.value,
      avatar: avatarStates.value,
    };

    const response = await sendRequest(userData, AuthCtx.token);

    if (response.status === 200) {
      console.log("ok!");
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

          <div className="buttons">
            <Button type="submit">Submit</Button>
            <Button type="button" color="bg-primary hover:text-white">
              Cancel
            </Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default ProfileForm;
