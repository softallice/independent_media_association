import React, { useState, useEffect, useContext } from 'react';
import { ViewContext } from '../../context/ViewContextLayer';

// import getOne from '../../api/getOne';

import Button from '../../components/Button';
import TextEditor from '../../components/TextEditor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import library from '../../assets/fontAwesomeLibrary';
import style from '../../css/ActivePanel.module.css';

function Edit() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('(Untitled)');
  const { setView, post } = useContext(ViewContext);
  // console.log(post);
  // useEffect(() => {
  //   setContent(post.content);
  // },[post]);

  const handleTitle = (event) => {
    // setTitle(event.target.value);
  };
  const saveArticle = () => {
    // let body = {
    //   title:title,
    //   blurb:'',
    //   content:content,
    // }
    // post('post', body)
  };

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <Button
          label={<FontAwesomeIcon icon='angle-double-left' />}
          clickEvent={() => setView('articles')}
          uniqueStyle={'goBack'}
        />
        <div id={style.title}>
          <input value={title} onChange={handleTitle}></input>
        </div>
        <div id={style.actions}>
          <Button
            label={'Save Edits'}
            clickEvent={saveArticle}
            uniqueStyle={'addItem'}
          />
        </div>
      </div>
      <TextEditor asdf={post.content} sendContent={setContent} />
    </div>
  );
}

export default Edit;
