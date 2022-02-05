import React from "react";

import { initialCampaignState } from "../../store/campaign/campaign-slice";

import Textbox from "../UI/TextBox/Textbox";

function CampaignInfo(props) {
  return (
    <div className="md:ml-2 md:w-2/3">
      <Textbox>
        <p className="font-semibold">Title:</p>
        <p>{props.title || initialCampaignState.activeCampaign.title}</p>
      </Textbox>
      <Textbox>
        <p className="font-semibold">Dungeon Master:</p>
        <p>
          {props.dungeonMaster ||
            initialCampaignState.activeCampaign.dungeonMaster}
        </p>
      </Textbox>
      <Textbox>
        <p className="font-semibold">Status:</p>
        <p>{props.status || initialCampaignState.activeCampaign.status}</p>
      </Textbox>
      <Textbox>
        <p className="text-justify">
          {props.description || initialCampaignState.activeCampaign.description}
        </p>
      </Textbox>
    </div>
  );
}

export default CampaignInfo;
