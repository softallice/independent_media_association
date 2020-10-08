import React, { useEffect, useState } from "react";
import client from "./authentication/feathersClient";

import './css/style.css'
import Home from "./views/Home";
import User from "./views/User";

function App() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    client
      .reAuthenticate()
      .then((user) => {
        setUser(user.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const logout = () => {
    setUser(null);
    client.logout();
  };
  return (
    <>
      <Home />
      {user ? <User logout={logout} user={user} /> : (null)}
    </>
  );
}

export default App;