import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import CampaignSelect from "./CampaignSelect";
import CampaignInfo from "./CampaignInfo";

import AuthContext from "../../context/auth-context";
import { getCampaignsAction } from "../../store/campaign/campaign-actions";
import { HTTP_STATUS } from "../../hooks/useHttp";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignBlock() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const campaignsData = useSelector((state) => state.campaign);
  const httpUI = useSelector((state) => state.httpUI);

  useEffect(() => {
    dispatch(getCampaignsAction("", token));
  }, [token, dispatch]);

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
