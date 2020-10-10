import React, { useState } from "react";
import "./css/sidebar.css";
import "./css/activepanel.css";

import Menu from "./components/Menu";

import Draft from "./views/Draft";
import Scheduled from "./views/Scheduled";
import Images from "./views/Images";
import Published from "./views/Published";
import Settings from "./views/Settings";
import Staff from "./views/Staff";
import Tags from "./views/Tags";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const WindowOptions = {
  drafts: Draft,
  scheduled: Scheduled,
  images: Images,
  published: Published,
  settings: Settings,
  staff: Staff,
  tags: Tags,
};
let viewToolbarIcon = <FontAwesomeIcon icon={faAngleDoubleLeft} />;

function User({ user, logout }) {
  const firstName = user.name.split(" ").slice(0, 1);
  let [toolbarVisibility, setToolbarVisibility] = useState(true);
  // Retrieved from Menu Component - Based Off Button Clicked
  let [activeOption, setActiveOption] = useState(null);
  // Variable Option Window Display Definition
  const ActiveWindow = WindowOptions[activeOption];

  const minimize = () => {
    if (toolbarVisibility) {
      viewToolbarIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;
      setToolbarVisibility(false);
    } else {
      viewToolbarIcon = <FontAwesomeIcon icon={faAngleDoubleLeft} />;
      setToolbarVisibility(true);
    }
  };

  return (
    <section id="user">
      {toolbarVisibility ? (
        <section id="user-sidebar">
          <h1 id="user-welcome-message">Welcome, {firstName}</h1>
          <div id="user-tools-menu">
            {/* TODO Add entire site search functionality */}
            {/* <button>🔍</button> */}
            <Menu setActiveOption={setActiveOption} />
          </div>
          <button id="logout-button" onClick={logout}>
            Logout
          </button>
        </section>
      ) : null}
      <button id="user-minimize" onClick={() => minimize()}>
        <span>{viewToolbarIcon}</span>
      </button>
      {ActiveWindow ? (
        <section id="user-active-panel">
          <ActiveWindow />
        </section>
      ) : null}
    </section>
  );
}
export default User;
