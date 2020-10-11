import React from "react";
import Dropdown from "../../components/Dropdown";

function Tags() {
  return (
    <>
      <div id="user-active-window-top-bar">
        <h1>Tags</h1>
        <div id="user-active-window-filter-bar">
          < Dropdown defaultValue={'External Tags'} />
        </div>
      </div>
    </>
  );
}

export default Tags;
