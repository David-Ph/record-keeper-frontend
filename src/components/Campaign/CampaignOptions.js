import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../context/auth-context";
import { getOneCampaignAction } from "../../store/campaign/campaign-actions";

import Option from "../UI/Input/Option";

function CampaignOptions(props) {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  let availableCampaigns = [];

  if (Array.isArray(props.campaigns)) {
    availableCampaigns = props.campaigns.map((campaign) => {
      return {
        id: campaign._id,
        label: campaign.title,
      };
    });
  }

  const onSelectCampaign = (event) => {
    const id = event.target.value;
    dispatch(getOneCampaignAction(id, token));
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
