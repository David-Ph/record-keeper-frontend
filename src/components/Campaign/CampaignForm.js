import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthContext from "../../context/auth-context";
import useInput from "../../hooks/useInput";
import { HTTP_STATUS } from "../../hooks/useHttp";
import {
  titleValidator,
  descriptionValidator,
  dungeonMasterValidator,
} from "../../helper/validators/CampaignValidator";
import {
  addCampaignAction,
  editCampaignAction,
} from "../../store/campaign/campaign-actions";
import { CampaignStatus } from "../../config/Options";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Input from "../UI/Input/Input";
import TextArea from "../UI/Input/TextArea";
import Option from "../UI/Input/Option";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignForm(props) {
  const AuthCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const httpUI = useSelector((state) => state.httpUI);
  const campaignsData = useSelector((state) => state.campaign);
  const titleStates = useInput(titleValidator);
  const DMStates = useInput(dungeonMasterValidator);
  const descriptionStates = useInput(descriptionValidator);
  const [statusState, setStatusState] = useState();

  const formIsValid = titleStates.validity.isValid;

  const { activeCampaign } = campaignsData;
  const { mode } = props;

  useEffect(() => {
    if (mode === "edit") {
      titleStates.setValueHandler(activeCampaign.title);
      DMStates.setValueHandler(activeCampaign.dungeonMaster);
      descriptionStates.setValueHandler(activeCampaign.description);
      setStatusState(activeCampaign.status);
    }
  }, [activeCampaign, DMStates, descriptionStates, titleStates, mode]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const campaignData = {
        title: titleStates.value,
        dungeonMaster: DMStates.value,
        description: descriptionStates.value,
        status: statusState,
      };

      if (props.mode === "edit") {
        dispatch(
          editCampaignAction(
            campaignsData.activeCampaign._id,
            campaignData,
            AuthCtx.token,
            props.onHide
          )
        );
      } else {
        dispatch(addCampaignAction(campaignData, AuthCtx.token, props.onHide));
      }
    }
  };

  const title = mode === "edit" ? "Edit" : "Add";

  const availableStatus = CampaignStatus.map((status) => {
    return {
      label: status,
      id: status,
    };
  });

  const onSelectStatus = (event) => {
    setStatusState(event.target.value);
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
              minLength: "1",
              maxLength: "50",
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
            value={statusState}
          />

          <Input
            label="Dungeon Master"
            isValid={DMStates.validity.isValid}
            onChange={DMStates.valueChangeHandler}
            onBlur={DMStates.valueInputBlurHandler}
            input={{
              id: "dungeonMaster",
              type: "text",
              minLength: "1",
              maxLength: "50",
              value: DMStates.value,
            }}
          />
          {DMStates.hasError && (
            <ErrorMessage message={DMStates.validity.message} />
          )}

          <TextArea
            label="Description"
            isValid={descriptionStates.validity.isValid}
            onChange={descriptionStates.valueChangeHandler}
            onBlur={descriptionStates.valueInputBlurHandler}
            input={{
              id: "description",
              type: "text",
              minLength: "1",
              maxLength: "250",
              value: descriptionStates.value,
            }}
          />
          {descriptionStates.hasError && (
            <ErrorMessage message={descriptionStates.validity.message} />
          )}

          {httpUI.campaignError && (
            <ErrorMessage message={httpUI.campaignError} />
          )}

          {httpUI.campaignPostStatus === HTTP_STATUS.PENDING ? (
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

export default CampaignForm;
