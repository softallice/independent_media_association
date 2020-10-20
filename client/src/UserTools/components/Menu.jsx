import React, { useState, useContext } from 'react';
import { ViewContext } from '../context/ViewContextLayer';

import MenuItem from './MenuItem';

import style from '../css/Menu.module.css';

function Menu({ sendWindowActivate }) {
  const [visiblity, toggleVisibility] = useState(false);
  const { setView } = useContext(ViewContext);

  const handleSubMenu = () => {
    setView('articles')
    visiblity === false ? toggleVisibility(true) : toggleVisibility(false);
  };

  return (
    <div id={style.menu}>
      <MenuItem
        function={() => handleSubMenu()}
        title={'Articles'}
        firstIcon='chevron-right'
        secondIcon='newspaper'
      />
      {visiblity && (
        <div id={style.submenu}>
          <MenuItem
            function={() => setView('drafts')}
            title={'Drafts'}
            firstIcon={undefined}
            secondIcon='pencil-alt'
          />
          <MenuItem
            function={() => setView('scheduled')}
            title={'Scheduled'}
            firstIcon={undefined}
            secondIcon='calendar-alt'
          />
          <MenuItem
            function={() => setView('published')}
            title={'Published'}
            firstIcon={undefined}
            secondIcon='check'
          />
        </div>
      )}
      <MenuItem
        function={() => setView('tags')}
        title={'Tags'}
        firstIcon={undefined}
        secondIcon='tag'
      />
      <MenuItem
        function={() => setView('images')}
        title={'Images'}
        firstIcon={undefined}
        secondIcon='images'
      />
      <MenuItem
        function={() => setView('staff')}
        title={'Staff'}
        firstIcon={undefined}
        secondIcon='user-friends'
      />
      <MenuItem
        function={() => setView('settings')}
        title={'Settings'}
        firstIcon={undefined}
        secondIcon='cog'
      />
    </div>
  );
}

export default Menu;
