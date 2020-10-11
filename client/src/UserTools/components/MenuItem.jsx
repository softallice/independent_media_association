import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../css/MenuItem.module.css";

function MenuOption(props) {
  return (
    <div className={style.row}>
      <button onClick={props.function}>
        <span className={style.icons}>
          <FontAwesomeIcon icon={props.firstIcon} />
          <FontAwesomeIcon icon={props.secondIcon} />
        </span>
        <span className={style.title}>{props.title}</span>
      </button>
    </div>
  );
}

export default MenuOption;
