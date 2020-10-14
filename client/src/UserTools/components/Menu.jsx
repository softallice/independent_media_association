import React, { useState } from "react";
import MenuItem from "./MenuItem";

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
        firstIcon='chevron-right'
        secondIcon='newspaper'
      />
      {visiblity && (
        <div id={style.submenu}>
          <MenuItem
            function={() => sendWindowActivate("drafts")}
            title={"Drafts"}
            firstIcon={undefined}
            secondIcon='pencil-alt'
          />
          <MenuItem
            function={() => sendWindowActivate("scheduled")}
            title={"Scheduled"}
            firstIcon={undefined}
            secondIcon='calendar-alt'
          />
          <MenuItem
            function={() => sendWindowActivate("published")}
            title={"Published"}
            firstIcon={undefined}
            secondIcon='check'
          />
        </div>
      )}
      <MenuItem
        function={() => sendWindowActivate("tags")}
        title={"Tags"}
        firstIcon={undefined}
        secondIcon='tag'
      />
      <MenuItem
        function={() => sendWindowActivate("images")}
        title={"Images"}
        firstIcon={undefined}
        secondIcon='images'
      />
      <MenuItem
        function={() => sendWindowActivate("staff")}
        title={"Staff"}
        firstIcon={undefined}
        secondIcon='user-friends'
      />
      <MenuItem
        function={() => sendWindowActivate("settings")}
        title={"Settings"}
        firstIcon={undefined}
        secondIcon='cog'
      />
    </div>
  );
}

export default Menu;
