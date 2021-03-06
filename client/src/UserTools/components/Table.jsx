import React from 'react';
import TableRow from './TableRow';
import style from '../css/Table.module.css';

function Table({ data, columns }) {
  return (
    <>
      <section id={style.header}>
        {columns.map((column, index) => (
          <h6 key={index}>{column}</h6>
        ))}
      </section>
      {data && (
        <section>
          {data.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </section>
      )}
    </>
  );
}

export default Table;
