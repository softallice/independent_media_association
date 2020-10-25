import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import library from '../assets/fontAwesomeLibrary';
import style from '../css/Dropdown.module.css';

function Dropdown({ options }) {
  const [visible, setVisibility] = useState(false);
  const [value, setValue] = useState(options[0]);

  const openMenu = () => {
    setVisibility(true);
  };
  const select = (selection) => {
    setVisibility(false);
    setValue(selection)
  };
  return (
    <>
      <div className={style.dropdown} onClick={openMenu}>
        {value}
        <FontAwesomeIcon icon='chevron-down' />
      </div>
      {visible && (
        <section>
          {options.map((option) => (
            <div key={option} className={style.dropdown} onClick={() => select(option)}>
              {option}
              <FontAwesomeIcon icon='chevron-down' />
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Dropdown;
