import React, { useEffect, useState, useContext } from 'react';
import { ViewContext } from '../../context/ViewContextLayer';

import usePromise from '../../hooks/usePromise'
import apiGetAll from '../../api/getAll';


import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Table from '../../components/Table';

import style from '../../css/ActivePanel.module.css';
// apiGetAll('article')
//TODO Add 'Draft', 'Scheduled' & 'Published' to this
function Articles({ setView }) {
  // const [result, error, isLoading] = usePromise(() => fetch(`http://localhost:4000/article`).then(r => r.text()))
  const { setArticle } = useContext(ViewContext);
  let [articles, setAllArticles] = useState([]);

  const [error, setError] = useState('');
  useEffect(() => {
    apiGetAll('article')
    // let isSubscribed = true;
    // apiGetAll('article').then(articles => console.log('Displaying this data: ', articles))
      // .then(articles => (isSubscribed ? setAllArticles(articles) : null))
      // .catch(error => (isSubscribed ? setError(error.toString()) : null));
    // return () => (isSubscribed = false);
  }, []);

  useEffect(() => {
    //Clears previously loaded article from cache in preparation for 'New Article'
    setArticle('');
  });

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <div id={style.title}>
          <h1>All Articles</h1>
        </div>
        <div id={style.actions}>
          <div id={style.filterBar}>
            {/* TODO Make these filters functional */}
            <Dropdown options={['All status']} />
            <Dropdown options={['All authors']} />
            <Dropdown options={['All tags']} />
            <Dropdown options={['Sort by: Newest']} />
          </div>
          <Button
            label={'New Article'}
            clickEvent={() => setView('author')}
            uniqueStyle={'addItem'}
          />
        </div>
      </div>
      {error && <h4>{error.message}</h4>}
      <Table
        data={articles.data}
        columns={['Article', 'Status', 'Last Updated']}
      />
    </div>
  );
}

export default Articles;
