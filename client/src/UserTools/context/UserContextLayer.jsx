import React, { useState, useEffect } from 'react';
import client from '../../authentication/feathersClient';

const UserContext = React.createContext();

function UserContextLayer({ children, setAuthed }) {
  let [user, setUser] = useState({ name: 'Derek' });
  const firstName = user?.name.split(' ').slice(0, 1);

  useEffect(() => {
    client
      .reAuthenticate()
      .then((user) => {
        setUser(user.user);
        setAuthed(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [setAuthed]);

  const logout = () => {
    setUser(null);
    setAuthed(false);
    client.logout();
  };
  return (
    <>
      <UserContext.Provider value={{ logout, user, firstName }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export {UserContextLayer, UserContext};
