import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { deleteCampaignAction } from "../../store/campaign/campaign-actions";

import Modal from "../Modal/Modal";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function DeleteCampaign(props) {
  const AuthCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push("/dashboard/");
  };

  return (
    <Modal onClick={props.onHide}>
      <section>
        <form className="text-center" onSubmit={submitHandler}>
          <p>Are you sure?</p>
          {httpUI.campaignPostStatus === HTTP_STATUS.PENDING ? (
            <LoadingSpinner />
          ) : (
            <div className="buttons">
              <Button width="w-1/3" type="submit">
                Yes
              </Button>
              <Button
                width="w-1/3"
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
