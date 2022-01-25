import React, { useState, useEffect, useContext } from "react";

import CampaignOptions from "./CampaignOptions";

import useHttp, { HTTP_STATUS } from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
import { getCampaigns } from "../../lib/campaignApi";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Textbox from "../UI/TextBox/Textbox";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignInfo() {
  const { token } = useContext(AuthContext);

  const {
    sendRequest: getCampaignRequest,
    status: getCampaignStatus,
    data: getCampaignData,
    error: getCampaignError,
  } = useHttp(getCampaigns, true);

  const [activeCampaign, setActiveCampaign] = useState();

  useEffect(() => {
    getCampaignRequest("", token);
  }, [getCampaignRequest, token]);

  if (getCampaignStatus === HTTP_STATUS.PENDING) {
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
        <Textbox>
          <div className="md:flex md:flex-col md:justify-center ">
            <CampaignOptions />
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
        <div className="md:ml-2">
          <Textbox>
            <p className="font-semibold">Dungeon Master:</p>
            <p>Nazth</p>
          </Textbox>
          <Textbox>
            <p className="font-semibold">Status:</p>
            <p>On Going</p>
          </Textbox>
          <Textbox>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt
              corporis pariatur enim nisi quod! Reprehenderit quidem officia
              nisi corporis tempore assumenda voluptatibus modi, cupiditate
              laborum, quam eos vitae repellat dolorem natus aut dicta at illo
              debitis animi ex ad nostrum sed! Voluptatum dicta et similique
              atque ipsam voluptatibus impedit?
            </p>
          </Textbox>
        </div>
      </div>
    </SectionBlock>
  );
}

export default CampaignInfo;
