import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import post from '../../api/post'

import style from "../../css/ActivePanel.module.css";
import Button from "../../components/Button";

import TextEditor from "../../components/TextEditor";
// eslint-disable-next-line no-unused-vars
import library from "../../assets/fontAwesomeLibrary";

function NewArticle({ user, sendWindowActivate }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState('(Untitled)');
  const handleTitle = (event) => {
    setTitle(event.target.value)
  };
  const saveArticle = () => {
    let body = {
      title:title,
      blurb:'',
      content:content,
    }
    post('post', body, user)
  };

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <Button
          label={<FontAwesomeIcon icon="angle-double-left" />}
          clickEvent={() => sendWindowActivate("articles")}
          uniqueStyle={"goBack"}
        />
        <div id={style.title}>
          <input value={title} onChange={handleTitle}></input>
        </div>
        <div id={style.actions}>
          <Button
            label={"Publish"}
            clickEvent={saveArticle}
            uniqueStyle={"addItem"}
          />
        </div>
      </div>
      <TextEditor sendContent={setContent} />
    </div>
  );
}

export default NewArticle;
