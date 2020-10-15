import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "../../css/ActivePanel.module.css";
import Button from "../../components/Button";

import TextEditor from "../../components/TextEditor";
import library from '../../assets/fontAwesomeLibrary'

function NewArticle({ sendWindowActivate }) {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const handleTitle = (event) => {
    // setTitle(event.target.value)
  }
  const saveArticle = () => {
    // let body = {
    //   title:title,
    //   blurb:'',
    //   content:content,
    // }
    // console.log(body);
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
      <div>
        {/* <label name='title'>New Article:</label>
        <input type='text' name='title' id='title' value={title} onChange={handleTitle}></input> */}
        <TextEditor sendContent={setContent}/>
      </div>
    </div>
  );
}

export default NewArticle;
