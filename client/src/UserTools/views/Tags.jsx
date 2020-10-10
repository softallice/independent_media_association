import React from "react";
import Dropdown from "../components/Dropdown";

function Tags() {
  return (
    <>
      <div class="user-active-window-top-bar">
        <h1 id="user-active-window-title">Tags</h1>
        <section>
          <p>from</p>
          <Dropdown searchParameter={"author"} />
        </section>
        <section>
          <p>with</p>
          <Dropdown searchParameter={"tags"} />
        </section>
        <section>
          <p>sort by</p>
          <Dropdown searchParameter={"sorted"} />
        </section>
      <button id="user-add-new-product">New Tag</button>
      </div>
    </>
  );
}

export default Tags;
