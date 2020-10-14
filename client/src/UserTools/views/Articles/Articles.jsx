import React from "react";
import Dropdown from "../../components/Dropdown";
import style from "../../css/ActivePanel.module.css";
import Button from "../../components/Button";

function Articles({ sendWindowActivate }) {
  return (
    <div id={style.panel}>
      <div id={style.header}>
        <div id={style.title}>
          <h1>All Articles</h1>
        </div>
        <div id={style.actions}>
          <div id={style.filterBar}>
            <Dropdown defaultValue={"All authors"} />
            <Dropdown defaultValue={"All tags"} />
            <Dropdown defaultValue={"Sort by: Newest"} />
          </div>
          <Button
            label={"New Article"}
            clickEvent={() => sendWindowActivate("newArticle")}
            uniqueStyle={"addItem"}
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
