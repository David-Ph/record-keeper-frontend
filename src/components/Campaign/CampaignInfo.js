import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import CampaignOptions from "./CampaignOptions";

import AuthContext from "../../context/auth-context";
import { getCampaignsData } from "../../store/campaign/campaign-actions";
import { campaignActions } from "../../store/campaign/campaign-slice";
import { HTTP_STATUS } from "../../hooks/useHttp";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Textbox from "../UI/TextBox/Textbox";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignInfo() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const campaignsData = useSelector((state) => state.campaign);
  const httpUI = useSelector((state) => state.httpUI);

  useEffect(() => {
    dispatch(getCampaignsData("", token));
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
        <div className="md:w-1/3">
          <Textbox>
            <div className="md:flex md:flex-col md:justify-center">
              <CampaignOptions campaigns={campaignsData.campaignsList} />
              <Button>New Campaign</Button>
              <div>
                <Button width="w-1/2" color="bg-primary hover:text-white">
                  Delete
                </Button>
                <Button width="w-1/2" color="bg-primary hover:text-white">
                  Edit
                </Button>
              </div>
            </div>
          </Textbox>
        </div>
        <div className="md:ml-2 md:w-2/3">
          <Textbox>
            <p className="font-semibold">Dungeon Master:</p>
            <p>{campaignsData.activeCampaign.DM}</p>
          </Textbox>
          <Textbox>
            <p className="font-semibold">Status:</p>
            <p>{campaignsData.activeCampaign.status}</p>
          </Textbox>
          <Textbox>
            <p className="text-justify">
              {campaignsData.activeCampaign.description}
            </p>
          </Textbox>
        </div>
      </div>
    </SectionBlock>
  );
}

export default CampaignInfo;
