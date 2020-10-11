import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Dropdown({ defaultValue }) {
  return (
    <div className="user-active-window-dropdown">
      {defaultValue} <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default Dropdown;
