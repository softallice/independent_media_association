import React, { useState } from "react";

import Menu from "./components/Menu";
import Button from "./components/Button";
import Draft from "./views/Articles/Draft";
import Scheduled from "./views/Articles/Scheduled";
import Images from "./views/Images/Images";
import Published from "./views/Articles/Published";
import Settings from "./views/Settings/Settings";
import Staff from "./views/Staff/Staff";
import Tags from "./views/Tags/Tags";
import Articles from "./views/Articles/Articles";
import NewArticle from "./views/Articles/NewArticle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import library from './assets/fontAwesomeLibrary'

import style from "./css/Sidebar.module.css";

const windows = {
  drafts: Draft,
  scheduled: Scheduled,
  images: Images,
  published: Published,
  settings: Settings,
  staff: Staff,
  tags: Tags,
  articles: Articles,
  newArticle: NewArticle,
};

let minimizeIcon = <FontAwesomeIcon icon="angle-double-left" /> || null;

function User({ user, logout }) {
  const firstName = user.name.split(" ").slice(0, 1);
  let [visibility, toggleVisibility] = useState(true);
  // Retrieved from Menu Component - Based Off Button Clicked
  let [openWindow, setOpenWindow] = useState(null);
  // Variable Option Window Display Definition
  const ActiveWindow = windows[openWindow];

  const minimize = () => {
    if (visibility) {
      minimizeIcon = <FontAwesomeIcon icon="angle-double-right" />;
      toggleVisibility(false);
    } else {
      minimizeIcon = <FontAwesomeIcon icon="angle-double-left" />;
      toggleVisibility(true);
    }
  };

  const handleWindowActivate = (selected) => {
    selected === openWindow ? setOpenWindow(null) : setOpenWindow(selected);
  };

  return (
    <section id={style.interface}>
      {visibility && (
        <section id={style.sidebar}>
          <h1 id={style.welcomeMessage}>Welcome, {firstName}</h1>
          <Menu sendWindowActivate={handleWindowActivate} />
          <Button uniqueStyle={"logout"} label={"Logout"} clickEvent={logout} />
        </section>
      )}
      <button id={style.minimize} onClick={() => minimize()}>
        {minimizeIcon}
      </button>
      {ActiveWindow && (
        <ActiveWindow user={user} sendWindowActivate={handleWindowActivate} />
      )}
    </section>
  );
}
export default User;
