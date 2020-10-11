import React from "react";
import Dropdown from "../../components/Dropdown";

function Published() {
  return (
    <>
      <div id="user-active-window-top-bar">
        <h1>Published Articles</h1>
        <div id="user-active-window-filter-bar">
          < Dropdown defaultValue={'All authors'} />
          < Dropdown defaultValue={'All tags'} />
          < Dropdown defaultValue={'Sort by: Newest'} />
        </div>
      </div>
    </>
  );
}

export default Published;
