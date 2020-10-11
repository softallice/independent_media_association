import React from "react";
import Dropdown from "../../components/Dropdown";

function Articles() {
  return (
    <div id="user-active-window-header">
      <h1>All Articles</h1>
      <div id="user-active-window-actions">
        <div id="user-active-window-filter-bar">
          <Dropdown defaultValue={"All authors"} />
          <Dropdown defaultValue={"All tags"} />
          <Dropdown defaultValue={"Sort by: Newest"} />
        </div>
      </div>
    </div>
  );
}

export default Articles;
