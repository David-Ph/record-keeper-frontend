import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import AuthContext from "../../context/auth-context";
import { getOneCampaignAction } from "../../store/campaign/campaign-actions";

import Option from "../UI/Input/Option";

function CampaignOptions() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const campaignsData = useSelector((state) => state.campaign);
  let availableCampaigns = [];

  if (Array.isArray(campaignsData.campaignsList)) {
    availableCampaigns = campaignsData.campaignsList.map((campaign) => {
      return {
        id: campaign._id,
        label: campaign.title,
      };
    });
  }

  const onSelectCampaign = (event) => {
    const id = event.target.value;
    dispatch(getOneCampaignAction(id, token));
    history.push(`/dashboard/${id}`);
  };

  return (
    <Option
      input={{ id: "select-campaign" }}
      onChange={onSelectCampaign}
      options={availableCampaigns}
      inputClasses="font-handwritten text-2xl text-center"
      labelClasses="text-xs"
      usedBy="Campaign"
    />
  );
}

export default CampaignOptions;
