import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../css/MenuItem.module.css";

function MenuItem(props) {
  return (
    <div className={style.row}>
      <button onClick={props.function}>
        {props.secondIcon && (
          <span className={style.icons}>
            <FontAwesomeIcon icon={props.firstIcon} />
            <FontAwesomeIcon icon={props.secondIcon} />
          </span>
        )}
        <span className={style.title}>{props.title}</span>
      </button>
    </div>
  );
}

export default MenuItem;
