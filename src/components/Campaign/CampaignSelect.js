import React, { useState } from "react";

import CampaignForm from "./CampaignForm";
import DeleteCampaign from "./DeleteCampaign";
import CampaignOptions from "./CampaignOptions";

import Button from "../UI/Button/Button";
import Textbox from "../UI/TextBox/Textbox";

function CampaignSelect() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      {showAddModal && <CampaignForm onHide={onHideAddHandler} />}
      {showEditModal && <CampaignForm onHide={onHideEditHandler} mode="edit" />}
      {showDeleteModal && <DeleteCampaign onHide={onHideDeleteHandler} />}
    </div>
  );
}

export default CampaignSelect;
