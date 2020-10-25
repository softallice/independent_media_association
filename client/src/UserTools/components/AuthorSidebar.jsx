import React from 'react';
import style from '../css/AuthorSidebar.module.css';

import Dropdown from './Dropdown';
import DatePicker from './DatePicker'

function AuthorSidebar() {

  return (
    <div id={style.bar}>
      <Dropdown options={['Status: Draft', 'Status: Scheduled', 'Status: Published']} />
      <DatePicker />
      {/* <Dropdown defaultValue={'Author'} /> */}
    </div>
  );
}

export default AuthorSidebar;
