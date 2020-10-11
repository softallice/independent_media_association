import React from "react";
import Dropdown from "../../components/Dropdown";

function Scheduled() {
  return (
    <>
      <div id="user-active-window-top-bar">
        <h1>Scheduled Articles</h1>
        <div id="user-active-window-filter-bar">
          < Dropdown defaultValue={'All authors'} />
          < Dropdown defaultValue={'All tags'} />
          < Dropdown defaultValue={'Sort by: Soonest to Publish'} />
        </div>
      </div>
    </>
  );
}

export default Scheduled;
