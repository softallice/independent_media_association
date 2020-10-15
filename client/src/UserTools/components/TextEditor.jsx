import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

function TextEditor({ sendContent }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readOnly: false,
    height: 200,
  };
  const test = (content) => {
      console.log(content);
  }
  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={test}
        onChange={(newContent) => {}}
      />
    </>
  );
}

export default TextEditor;
