import React, { useState, useContext } from "react";
import {ViewContext} from '../../context/ViewContextLayer'
import apiPost from '../../api/post'
import apiPatch from '../../api/patch'

import Button from "../../components/Button";
import TextEditor from "../../components/TextEditor";

// eslint-disable-next-line no-unused-vars
import library from "../../assets/fontAwesomeLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ActivePanel.module.css";

function Author({ user, setView }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState('(Untitled)');
  const { post } = useContext(ViewContext);

  const handleTitle = (event) => {
    setTitle(event.target.value)
  };

  const saveArticle = () => {
    let body = {
      title:title,
      blurb:'',
      content:content,
    }
    post ? apiPost('post', body, user) : apiPatch()
  };

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <Button
          label={<FontAwesomeIcon icon="angle-double-left" />}
          clickEvent={() => setView("articles")}
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
      <TextEditor initialContent={post.content} sendContent={setContent} />
    </div>
  );
}

export default Author;
