import React from 'react';

import useGetRequest from '../../api/Get';

// import Search from '../../components/Search'
import Loading from '../../components/Loading'
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Table from '../../components/Table';
import {articleStatuses, sortParameters} from '../../lib/constants.js'

import style from '../../css/ActivePanel.module.css';

//TODO Add 'Draft', 'Scheduled' & 'Published' to this
function Articles({ setView }) {
  let filter = {status:'All status', authors:'All authors', tags:'All Tags', sort:'Newest'}
  const { data, loading, error } = useGetRequest('article', filter);

  const setFilters = (type, option) => {
    filter[type] = option
  }

  return (
    <div id={style.panel}>
      <div id={style.header}>
        <div id={style.title}>
          <h1>All Articles</h1>
        </div>
        <div id={style.actions}>
          <div id={style.filterBar}>
            {/* TODO Make these filters functional */}
            <Dropdown setFilter={setFilters} type={'status'} options={articleStatuses} />
            {/* <Search setFilter={setFilters}/>
            <Search setFilter={setFilters}/> */}
            <Dropdown setFilter={setFilters} type={'sort'} options={sortParameters}/>
          </div>
          <Button
            label={'New Article'}
            clickEvent={() => setView('author')}
            uniqueStyle={'addItem'}
          />
        </div>
      </div>
      {loading && <Loading />}
      {error && <h3>{error.message}</h3>} 
      {data && (
        <Table
          data={data.data}
          columns={['Article', 'Status', 'Last Updated']}
        />
      )}
    </div>
  );
}


export default Articles;
