import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../css/MenuItem.module.css";
// eslint-disable-next-line no-unused-vars
import library from '../assets/fontAwesomeLibrary'

function MenuItem(props) {
  return (
    <div className={style.row}>
      <button onClick={props.function}>
        {props.secondIcon && (
          <span className={style.icons}>
            {props.firstIcon && (<FontAwesomeIcon icon={props.firstIcon} />)}
            <FontAwesomeIcon icon={props.secondIcon} />
          </span>
        )}
        <span className={style.title}>{props.title}</span>
      </button>
    </div>
  );
}

export default MenuItem;
