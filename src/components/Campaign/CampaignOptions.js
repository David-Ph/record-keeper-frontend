import React from "react";

import Option from "../UI/Input/Option";

function CampaignOptions(props) {
  const availableCampaigns = ["Saltshakers", "Treefucqers"];

  return (
    <Option
      input={{ id: "select-campaign" }}
      label="Select Campaign"
      options={availableCampaigns}
      inputClasses="font-handwritten text-2xl text-center"
      labelClasses="text-xs"
    />
  );
}

export default CampaignOptions;
