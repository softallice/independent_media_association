import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";

function TextEditor({sendContent}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const update = (editorState) => {
    setEditorState(editorState);
  };
  const setContent = () => {
    const content = convertToRaw(editorState.getCurrentContent());
    sendContent(content)
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={update}
        onBlur={setContent}
      />
    </div>
  );
}

export default TextEditor;
