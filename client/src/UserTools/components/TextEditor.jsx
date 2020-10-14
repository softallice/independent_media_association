import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const update = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={update}
      />
    </div>
  );
}

export default TextEditor;
