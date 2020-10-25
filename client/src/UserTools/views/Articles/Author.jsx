import React, { useState, useContext } from 'react';
import { ViewContext } from '../../context/ViewContextLayer';
import apiPost from '../../api/post';
import apiPatch from '../../api/patch';

import Button from '../../components/Button';
import TextEditor from '../../components/TextEditor';
import AuthorSidebar from '../../components/AuthorSidebar';

// eslint-disable-next-line no-unused-vars
import library from '../../assets/fontAwesomeLibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../css/ActivePanel.module.css';

function Author({ user }) {
  const { article, setView } = useContext(ViewContext);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState(article.title || '(Untitled)');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const openSidebar = (event) => {};
  const saveArticle = () => {
    let body = {
      title: title,
      blurb: '',
      content: content,
      status: 'Published',
      slug: 'askdfj',
    };
    console.log(body);
    article
      ? apiPatch('article', body, article.id)
      : apiPost('article', body, user);
    setView('articles');
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
            label={'Publish'}
            clickEvent={saveArticle}
            uniqueStyle={'addItem'}
          />
          <Button
            label={<FontAwesomeIcon icon='bars' />}
            clickEvent={openSidebar}
            uniqueStyle={'hamburger'}
          />
        </div>
      </div>
      <div id={style.main}>
        <TextEditor initialContent={article.content} sendContent={setContent} />
        <AuthorSidebar />
      </div>
    </div>
  );
}

export default Author;
