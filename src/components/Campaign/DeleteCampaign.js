import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Routes } from "../../config/Routes";

import AuthContext from "../../context/auth-context";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { deleteCampaignAction } from "../../store/campaign/campaign-actions";

import Modal from "../Modal/Modal";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/Notifications/ErrorMessage";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function ProfileForm(props) {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const httpUI = useSelector((state) => state.httpUI);
  const campaignsData = useSelector((state) => state.campaign);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(campaignsData.activeCampaign);
    dispatch(
      deleteCampaignAction(campaignsData.activeCampaign._id, AuthCtx.token)
    );
  };

  return (
    <Modal onClick={props.onHide}>
      <section>
        <form onSubmit={submitHandler}>
          <p>Are you sure?</p>
          {httpUI.campaignPostStatus === HTTP_STATUS.PENDING ? (
            <LoadingSpinner />
          ) : (
            <div className="buttons">
              <Button type="submit">Yes</Button>
              <Button
                onClick={props.onHide}
                type="button"
                color="bg-primary hover:text-white"
              >
                Cancel
              </Button>
            </div>
          )}
          {httpUI.campaign}
        </form>
      </section>
    </Modal>
  );
}

export default ProfileForm;
