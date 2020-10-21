import React, { useContext } from 'react';
import { ViewContext } from '../context/ViewContextLayer';

import style from '../css/TableRow.module.css';

function TableRow({ row }) {
  const { setPost, setView } = useContext(ViewContext);

  return (
    <div
      onClick={() => {
        setView('author');
        setPost(row);
      }}
      className={style.row}
    >
      {row.title}
    </div>
  );
}

export default TableRow;
