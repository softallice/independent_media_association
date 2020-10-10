import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuOption(props) {
    console.log(props.function)
  return (
    <div className="user-menu-row">
      <button onClick={props.function}>
        <span className="user-menu-icons">
          <FontAwesomeIcon icon={props.firstIcon} />
          <FontAwesomeIcon icon={props.secondIcon} />
        </span>
        <span className="user-menu-title">{props.title}</span>
      </button>
    </div>
  );
}

export default MenuOption;
