import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import library from '../assets/fontAwesomeLibrary'
import style from '../css/Dropdown.module.css'

function Dropdown({ defaultValue }) {
  return (
    <div className={style.dropdown}>
      {defaultValue} 
      <FontAwesomeIcon icon='chevron-down' />
    </div>
  );
}

export default Dropdown;
