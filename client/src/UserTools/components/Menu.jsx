import React, { useState } from "react";
import MenuItem from "./MenuItem";
import {
  faNewspaper,
  faChevronRight,
  faTag,
  faImages,
  faUserFriends,
  faCog,
  faPencilAlt,
  faCalendarAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import style from '../css/Menu.module.css'

function Menu({ sendWindowActivate }) {
  const [visiblity, toggleVisibility] = useState(false);

  const handleSubMenu = () => {
    sendWindowActivate('articles')
    visiblity === false
      ? toggleVisibility(true)
      : toggleVisibility(false);
  };

  return (
    <div id={style.menu}>
      <MenuItem
        function={() => handleSubMenu()}
        title={"Articles"}
        firstIcon={faChevronRight}
        secondIcon={faNewspaper}
      />
      {visiblity && (
        <div id={style.submenu}>
          <MenuItem
            function={() => sendWindowActivate("drafts")}
            title={"Drafts"}
            firstIcon={undefined}
            secondIcon={faPencilAlt}
          />
          <MenuItem
            function={() => sendWindowActivate("scheduled")}
            title={"Scheduled"}
            firstIcon={undefined}
            secondIcon={faCalendarAlt}
          />
          <MenuItem
            function={() => sendWindowActivate("published")}
            title={"Published"}
            firstIcon={undefined}
            secondIcon={faCheck}
          />
        </div>
      )}
      <MenuItem
        function={() => sendWindowActivate("tags")}
        title={"Tags"}
        firstIcon={undefined}
        secondIcon={faTag}
      />
      <MenuItem
        function={() => sendWindowActivate("images")}
        title={"Images"}
        firstIcon={undefined}
        secondIcon={faImages}
      />
      <MenuItem
        function={() => sendWindowActivate("staff")}
        title={"Staff"}
        firstIcon={undefined}
        secondIcon={faUserFriends}
      />
      <MenuItem
        function={() => sendWindowActivate("settings")}
        title={"Settings"}
        firstIcon={undefined}
        secondIcon={faCog}
      />
    </div>
  );
}

export default Menu;
