import React, { useState } from "react";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";

function JournalForm(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  return (
    <Modal onClick={props.onHide}>
      <div>
        <Title>Journal</Title>
        <div className="bg-yellow-100 px-2 max-h-[768px] overflow-auto">
          <Editor
            editorState={editorState}
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
