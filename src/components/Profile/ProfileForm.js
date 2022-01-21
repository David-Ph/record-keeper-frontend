import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import { usernameValidator } from "../../helper/validators/AuthValidator";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";

function ProfileForm(props) {
  const AuthCtx = useContext(AuthContext);
  const usernameStates = useInput(usernameValidator);

  const currentUsername = AuthCtx.user?.username;

  useEffect(() => {
    if (currentUsername) {
      usernameStates.setValueHandler(currentUsername);
    }
  }, [currentUsername]);

  return (
    <Modal onClick={props.onHideProfile}>
      <Title>Edit Profile</Title>
      <section>
        <form encType="multipart/form-data">
          <Input
            label="New Username:"
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
          <div className="flex justify-between m-2 flex-col md:flex-row">
            <label htmlFor="avatar">Avatar</label>
            <input type="file" id="avatar" />
          </div>

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
