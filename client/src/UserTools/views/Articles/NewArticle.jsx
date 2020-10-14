import React from "react";
import style from "../../css/ActivePanel.module.css";
import Button from "../../components/Button";

import TextEditor from "../../components/TextEditor";

function NewArticle({ sendWindowActivate }) {
  const saveArticle = () => {
    console.log("This article has been saved!");
  };
  return (
    <div id={style.panel}>
      <div id={style.header}>
        <Button
          label={"Back to Articles"}
          clickEvent={() => sendWindowActivate("articles")}
          uniqueStyle={"addItem"}
        />
        <div id={style.title}>
          <h1>New Article</h1>
        </div>
        <div id={style.actions}>
          <Button
            label={"Publish"}
            clickEvent={saveArticle}
            uniqueStyle={"addItem"}
          />
        </div>
      </div>
      <TextEditor />
    </div>
  );
}

export default NewArticle;
