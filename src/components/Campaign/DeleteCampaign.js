import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthContext from "../../context/auth-context";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { deleteCampaignAction } from "../../store/campaign/campaign-actions";

import Modal from "../Modal/Modal";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function DeleteCampaign(props) {
  const AuthCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const httpUI = useSelector((state) => state.httpUI);
  const campaignsData = useSelector((state) => state.campaign);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(
      deleteCampaignAction(
        campaignsData.activeCampaign._id,
        AuthCtx.token,
        props.onHide
      )
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

export default DeleteCampaign;
