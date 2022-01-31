import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CampaignOptions from "./CampaignOptions";
import CampaignForm from "./CampaignForm";
import DeleteCampaign from "./DeleteCampaign";

import AuthContext from "../../context/auth-context";
import { getCampaignsAction } from "../../store/campaign/campaign-actions";
import { HTTP_STATUS } from "../../hooks/useHttp";
import { initialCampaignState } from "../../store/campaign/campaign-slice";

import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Textbox from "../UI/TextBox/Textbox";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function CampaignInfo() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const campaignsData = useSelector((state) => state.campaign);
  const httpUI = useSelector((state) => state.httpUI);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const onAddCampaignHandler = () => {
    setShowAddModal(true);
  };

  const onEditCampaignHandler = () => {
    setShowEditModal(true);
  };

  const onHideAddHandler = () => {
    setShowAddModal(false);
  };

  const onHideEditHandler = () => {
    setShowEditModal(false);
  };

  const onHideDeleteHandler = () => {
    setShowDeleteModal(false);
  };

  return (
    <SectionBlock>
      <div className="md:flex text-sm">
        <div className="md:w-1/3 md:flex md:flex-col md:justify-center">
          <Textbox>
            <div className="md:flex md:flex-col md:justify-center w-full">
              <CampaignOptions />
              <Button onClick={onAddCampaignHandler}>New Campaign</Button>
              <div>
                <Button
                  onClick={setShowDeleteModal}
                  width="w-1/2"
                  color="bg-primary hover:text-white"
                >
                  Delete
                </Button>
                <Button
                  onClick={onEditCampaignHandler}
                  width="w-1/2"
                  color="bg-primary hover:text-white"
                >
                  Edit
                </Button>
              </div>
            </div>
          </Textbox>
        </div>
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
      {showAddModal && <CampaignForm onHide={onHideAddHandler} />}
      {showEditModal && <CampaignForm onHide={onHideEditHandler} mode="edit" />}
      {showDeleteModal && <DeleteCampaign onHide={onHideDeleteHandler} />}
    </SectionBlock>
  );
}

export default CampaignInfo;
