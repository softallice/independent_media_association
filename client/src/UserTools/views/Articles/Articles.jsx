import React, { useEffect, useState } from 'react';
import getAll from '../../api/getAll';
import style from '../../css/ActivePanel.module.css';

import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Table from '../../components/Table';

function Articles({ sendWindowActivate }) {
  let [posts, definePosts] = useState('');

  useEffect(() => {
    async function getPosts() {
      definePosts(await getAll('post'));
    }
    getPosts();
  }, []);

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <div id={style.title}>
          <h1>All Articles</h1>
        </div>
        <div id={style.actions}>
          <div id={style.filterBar}>
            <Dropdown defaultValue={'All authors'} />
            <Dropdown defaultValue={'All tags'} />
            <Dropdown defaultValue={'Sort by: Newest'} />
          </div>
          <Button
            label={'New Article'}
            clickEvent={() => sendWindowActivate('newArticle')}
            uniqueStyle={'addItem'}
          />
        </div>
      </div>
      <Table
        key={posts.data}
        data={posts.data}
        columns={['Article', 'Status', 'Last Updated']}
      />
    </div>
  );
}

export default Articles;
