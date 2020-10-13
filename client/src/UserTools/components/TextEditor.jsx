import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const test = (editorState) => {
    setEditorState(editorState)
  }
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={test}
      />
    </div>
  );
}

export default TextEditor;
