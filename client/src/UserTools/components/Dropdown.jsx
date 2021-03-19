import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import library from '../assets/fontAwesomeLibrary';
import style from '../css/Dropdown.module.css';

function Dropdown({ type, setFilter, options }) {
  const [visible, setVisibility] = useState(false);
  const [value, setValue] = useState(options[0]);

  const openMenu = () => {
    setVisibility(true);
  };
  const select = (selection) => {
    setVisibility(false);
    setValue(selection);
    setFilter(type, selection)
  };

  return (
    <>
      {!visible ? (
        <div className={style.selection} onClick={openMenu}>
          {value}
          <FontAwesomeIcon icon='chevron-down' />
        </div>
      ) : (
        <section className={style.dropdown}>
          {options.map((option) => (
            <option
              key={option}
              className={style.selection}
              onClick={() => select(option)}
            >
              {option}
            </option>
          ))}
        </section>
      )}
    </>
  );
}

export default Dropdown;
