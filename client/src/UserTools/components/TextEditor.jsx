import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({sendContent}) {
  const [content, setContent] = useState("Begin writing here...");
  const handleChange = (body) => {
    setContent(body);
  };

  //TODO Add wordcount API
  //   var wordcount = tinymce.activeEditor.plugins.wordcount;

  // console.log(wordcount.body.getWordCount());
  // console.log(wordcount.body.getCharacterCount());
  // console.log(wordcount.body.getCharacterCountWithoutSpaces());

  // console.log(wordcount.selection.getWordCount());
  // console.log(wordcount.selection.getCharacterCount());
  // console.log(wordcount.selection.getCharacterCountWithoutSpaces());
  return (
    <Editor
      onBlur={() => sendContent(content)}
      onEditorChange={handleChange}
      apiKey="1raai0z8qt1d6zcpx0f6nx1dxvxet0hukf3y9oz4d8cg1o75"
      init={{
        placeholder: "Testing...",
        skin: "oxide-dark",
        // Changes the placeholder text to light color for dark mode
        content_style:
          ".mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before{color:rgb(197, 188, 196) !important;}",
        height: "80%",
        menubar: false,
        plugins: [
          "advlist autolink lists link image imagetools",
          "hr pagebreak searchreplace quickbars media paste wordcount",
        ],
        pagebreak_separator: "<!-- Below the Fold -->",
        advlist_bullet_styles: "circle disc",
        advlist_number_styles:
          "default lower-alpha lower-roman upper-roman upper-alpha",
        imagetools_toolbar: "",
        contextmenu: false,
        browser_spellcheck: true,
        inline: true,
        quickbars_insert_toolbar: "bullist numlist image media hr pagebreak ",
        quickbars_selection_toolbar:
          "bold italic underline | formatselect | outdent indent | alignleft aligncenter alignright | blockquote quicklink",
        quickbars_image_toolbar:
          "outdent indent | alignleft aligncenter alignright |  imageoptions",
      }}
    />
  );
}

export default TextEditor;
