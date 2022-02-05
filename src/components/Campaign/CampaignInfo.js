import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import CampaignSelect from "./CampaignSelect";

import AuthContext from "../../context/auth-context";
import { getCampaignsAction } from "../../store/campaign/campaign-actions";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { initialCampaignState } from "../../store/campaign/campaign-slice";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Textbox from "../UI/TextBox/Textbox";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignInfo(props) {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const campaignsData = useSelector((state) => state.campaign);
  const httpUI = useSelector((state) => state.httpUI);

  useEffect(() => {
    dispatch(getCampaignsAction("", token));
  }, [token, dispatch]);

  if (httpUI.campaignStatus === HTTP_STATUS.PENDING) {
    return (
      <SectionBlock>
        <div className="flex justify-center items-center p-2">
          <LoadingSpinner />
        </div>
      </SectionBlock>
    );
  }

  return (
    <SectionBlock>
      <div className="md:flex text-sm">
        <CampaignSelect />
        <div className="md:ml-2 md:w-2/3">
          <Textbox>
            <p className="font-semibold">Title:</p>
            <p>
              {campaignsData.activeCampaign.title ||
                initialCampaignState.activeCampaign.title}
            </p>
          </Textbox>
          <Textbox>
            <p className="font-semibold">Dungeon Master:</p>
            <p>
              {campaignsData.activeCampaign.dungeonMaster ||
                initialCampaignState.activeCampaign.dungeonMaster}
            </p>
          </Textbox>
          <Textbox>
            <p className="font-semibold">Status:</p>
            <p>
              {campaignsData.activeCampaign.status ||
                initialCampaignState.activeCampaign.status}
            </p>
          </Textbox>
          <Textbox>
            <p className="text-justify">
              {campaignsData.activeCampaign.description ||
                initialCampaignState.activeCampaign.description}
            </p>
          </Textbox>
        </div>
      </div>
    </SectionBlock>
  );
}

export default CampaignInfo;
