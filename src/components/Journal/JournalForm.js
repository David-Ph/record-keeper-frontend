import React, { useState } from "react";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";

function JournalForm(props) {
  const { mode } = props;

  let title = "Add";
  let contentDataState = "";
  let editorDataState = EditorState.createEmpty();

  if (mode === "edit") {
    title = "Edit";
    contentDataState = ContentState.createFromBlockArray(
      convertFromHTML(props.body)
    );
    editorDataState = EditorState.createWithContent(contentDataState)
  }
  const [editorState, setEditorState] = useState(editorDataState);

  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  const onCloseModal = () => {
    const editorContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    let confirmation = true;

    // if editorContent has content, confirm close modal
    if (editorContent.length > 8) {
      confirmation = window.confirm(
        "Are you sure you want to close the modal? Content will be lost"
      );
    }

    if (confirmation) {
      props.onHide();
    }
  };

  return (
    <Modal onClick={onCloseModal}>
      <div>
        <Title>{title} Journal</Title>
        <div className="bg-yellow-100 px-2 max-h-[768px] overflow-auto">
          <Editor
            editorState={editorState}
            value="Hello"
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>
    </Modal>
  );
}

export default JournalForm;
