import React, { useState } from "react";
import MenuOption from "./MenuOption";
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

function Menu({ setActiveOption }) {
  const [subMenuExpanded, setSubMenuExpanded] = useState(false);
  const handleSubMenu = () => {
    console.log("here!");
    subMenuExpanded === false
      ? setSubMenuExpanded(true)
      : setSubMenuExpanded(false);
  };
  return (
    <>
      <MenuOption
        function={() => handleSubMenu()}
        title={"Articles"}
        firstIcon={faChevronRight}
        secondIcon={faNewspaper}
      />
      {subMenuExpanded && (
        <div id="user-menu-article-submenu">
          <MenuOption
            function={() => setActiveOption("drafts")}
            title={"Drafts"}
            firstIcon={undefined}
            secondIcon={faPencilAlt}
          />
          <MenuOption
            function={() => setActiveOption("scheduled")}
            title={"Scheduled"}
            firstIcon={undefined}
            secondIcon={faCalendarAlt}
          />
          <MenuOption
            function={() => setActiveOption("published")}
            title={"Published"}
            firstIcon={undefined}
            secondIcon={faCheck}
          />
        </div>
      )}
      <MenuOption
        function={() => setActiveOption("tags")}
        title={"Tags"}
        firstIcon={undefined}
        secondIcon={faTag}
      />
      <MenuOption
        function={() => setActiveOption("images")}
        title={"Images"}
        firstIcon={undefined}
        secondIcon={faImages}
      />
      <MenuOption
        function={() => setActiveOption("staff")}
        title={"Staff"}
        firstIcon={undefined}
        secondIcon={faUserFriends}
      />
      <MenuOption
        function={() => setActiveOption("settings")}
        title={"Settings"}
        firstIcon={undefined}
        secondIcon={faCog}
      />
    </>
  );
}

export default Menu;
