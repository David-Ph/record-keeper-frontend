import React from "react";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";
import Textbox from "../UI/TextBox/Textbox";

function JournalDetail(props) {
  return (
    <Modal onClick={props.onHide}>
      <div className="p-2">
        <Title>{props.title}</Title>
        <Textbox>{props.body}</Textbox>
      </div>
    </Modal>
  );
}

export default JournalDetail;
