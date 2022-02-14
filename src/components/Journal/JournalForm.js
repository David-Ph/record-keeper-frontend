import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import Modal from "../Modal/Modal";
import Title from "../UI/Typography/Title";

function JournalForm(props) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  return (
    <Modal onClick={props.onHide}>
      <div>
        <Title>Journal</Title>
        <div
          style={{
            border: "1px solid black",
            minHeight: "6em",
            cursor: "text",
          }}
          onClick={focusEditor}
        >
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Write something!"
          />
        </div>
      </div>
    </Modal>
  );
}

export default JournalForm;
