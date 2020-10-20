import React, { useState, useContext } from 'react';
import { ViewContext } from './context/ViewContextLayer';
import { UserContext } from './context/UserContextLayer';

import Menu from './components/Menu';
import Button from './components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import library from './assets/fontAwesomeLibrary';
import style from './css/Sidebar.module.css';


function User() {
  let [visibility, toggleVisibility] = useState(true);
  let [minimizeIcon, setMinimizeIcon] = useState(
    <FontAwesomeIcon icon='angle-double-left' />
  );
  const { firstName, logout } = useContext(UserContext);
  const { ActiveWindow } = useContext(ViewContext);

  const minimize = () => {
    if (visibility) {
      setMinimizeIcon(<FontAwesomeIcon icon='angle-double-right' />);
      toggleVisibility(false);
    } else {
      setMinimizeIcon(<FontAwesomeIcon icon='angle-double-left' />);
      toggleVisibility(true);
    }
  };

  return (
    <section id={style.interface}>
      {visibility && (
        <section id={style.sidebar}>
          <h1 id={style.welcomeMessage}>Welcome, {firstName}</h1>
          <Menu />
          <Button uniqueStyle={'logout'} label={'Logout'} clickEvent={logout} />
        </section>
      )}
      <Button
        uniqueStyle={'minimize'}
        label={minimizeIcon}
        clickEvent={() => minimize()}
      />
      {ActiveWindow && <ActiveWindow />}
    </section>
  );
}
export default User;
