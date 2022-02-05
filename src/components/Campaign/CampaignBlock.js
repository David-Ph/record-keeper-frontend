import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import CampaignSelect from "./CampaignSelect";
import CampaignInfo from "./CampaignInfo";

import AuthContext from "../../context/auth-context";
import {
  getCampaignsAction,
  getOneCampaignAction,
} from "../../store/campaign/campaign-actions";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { getIdFromUrl } from "../../helper/common/Misc";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignBlock() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const campaignsData = useSelector((state) => state.campaign);
  const httpUI = useSelector((state) => state.httpUI);

  const activeCampaignsId = campaignsData.activeCampaign._id

  useEffect(() => {
    const campaignId = getIdFromUrl(pathname);

    if (activeCampaignsId !== campaignId) {
      dispatch(getOneCampaignAction(campaignId, token));
    }

    dispatch(getCampaignsAction("", token));
  }, [token, dispatch, pathname, activeCampaignsId]);

  const isLoading = httpUI.campaignStatus === HTTP_STATUS.PENDING;
  const loadingSpinner = (
    <div className="flex md:ml-2 md:w-2/3 justify-center items-center p-2">
      <LoadingSpinner />
    </div>
  );

  return (
    <SectionBlock>
      <div className="md:flex text-sm">
        <CampaignSelect />
        {isLoading && loadingSpinner}
        {!isLoading && (
          <CampaignInfo
            title={campaignsData.activeCampaign.title}
            dungeonMaster={campaignsData.activeCampaign.dungeonMaster}
            status={campaignsData.activeCampaign.status}
            description={campaignsData.activeCampaign.description}
          />
        )}
      </div>
    </SectionBlock>
  );
}

export default CampaignBlock;
