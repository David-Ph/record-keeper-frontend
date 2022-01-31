import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Routes } from "../../config/Routes";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import useHttp from "../../hooks/useHttp";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { editProfile } from "../../lib/api";
import {
  titleValidator,
  descriptionValidator,
  dungeonMasterValidator,
} from "../../helper/validators/CampaignValidator";
import { CampaignStatus } from "../../config/Options";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Option from "../UI/Input/Option";

function ProfileForm(props) {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const titleStates = useInput(titleValidator);
  const DMStates = useInput(dungeonMasterValidator);
  const descriptionStates = useInput(descriptionValidator);

  const { sendRequest, error, status } = useHttp(editProfile);

  const formIsValid = titleStates.validity.isValid;

  // useEffect(() => {
  //   if (currentUsername) {
  //     usernameStates.setValueHandler(currentUsername);
  //   }
  // }, [currentUsername]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const campaignData = {
        title: titleStates.value,
      };

      const response = await sendRequest(campaignData, AuthCtx.token);

      if (response?.status === 201) {
        AuthCtx.login(AuthCtx.token, response.data.newData);
        history.replace(Routes.DASHBOARD_MAIN);
      }
    }
  };

  const title = props.mode === "edit" ? "Edit" : "Add";

  const availableStatus = CampaignStatus.map((status) => {
    return {
      label: status,
      id: status,
    };
  });

  const onSelectStatus = (event) => {
    const status = event.target.value;
  };

  return (
    <Modal onClick={props.onHide}>
      <Title>{title} Campaign</Title>
      <section>
        <form onSubmit={submitHandler}>
          <Input
            label="Title"
            isValid={titleStates.validity.isValid}
            onChange={titleStates.valueChangeHandler}
            onBlur={titleStates.valueInputBlurHandler}
            input={{
              id: "title",
              type: "text",
              minLength: "3",
              maxLength: "25",
              value: titleStates.value,
            }}
          />
          {titleStates.hasError && (
            <ErrorMessage message={titleStates.validity.message} />
          )}

          <Option
            label="Status"
            input={{ id: "select-status" }}
            onChange={onSelectStatus}
            options={availableStatus}
            usedBy="Status"
          />

          <Input
            label="Dungeon Master"
            isValid={DMStates.validity.isValid}
            onChange={DMStates.valueChangeHandler}
            onBlur={DMStates.valueInputBlurHandler}
            input={{
              id: "dungeonMaster",
              type: "text",
              minLength: "3",
              maxLength: "25",
              value: DMStates.value,
            }}
          />
          {DMStates.hasError && (
            <ErrorMessage message={DMStates.validity.message} />
          )}

          <Input
            label="Description"
            isValid={descriptionStates.validity.isValid}
            onChange={descriptionStates.valueChangeHandler}
            onBlur={descriptionStates.valueInputBlurHandler}
            input={{
              id: "description",
              type: "text",
              minLength: "3",
              maxLength: "25",
              value: descriptionStates.value,
            }}
          />
          {descriptionStates.hasError && (
            <ErrorMessage message={descriptionStates.validity.message} />
          )}

          {error && <ErrorMessage message={error} />}

          {status === "pending" ? (
            <LoadingSpinner />
          ) : (
            <div className="buttons">
              <Button type="submit">Submit</Button>
              <Button
                onClick={props.onHide}
                type="button"
                color="bg-primary hover:text-white"
              >
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
