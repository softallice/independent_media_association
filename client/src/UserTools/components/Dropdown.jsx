import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import style from '../css/Dropdown.module.css'

function Dropdown({ defaultValue }) {
  return (
    <div className={style.dropdown}>
      {defaultValue} <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default Dropdown;
