import React from "react";

import Modal from "../Modal/Modal";

function ProfileForm(props) {
  return <Modal onClick={props.onHideProfile}>Profile Form</Modal>;
}

export default ProfileForm;
