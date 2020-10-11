import React from "react";
import Dropdown from "../../components/Dropdown";

function Staff() {
  return (
    <>
      <div id="user-active-window-top-bar">
        <h1>Staff</h1>
        <div id="user-active-window-filter-bar">
          < Dropdown defaultValue={'All staff'} />
        </div>
      </div>
    </>
  );
}

export default Staff;
