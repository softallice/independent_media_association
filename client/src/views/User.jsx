import React from 'react';
import '../css/sidebar.css'

import Manage from '../components/UserTools/Manage'
import Settings from '../components/UserTools/Settings'

function User({ user, logout }) {
  return (
    <section id="user-sidebar">
      <h1>Welcome {user.name}</h1>
      {/* TODO Add entire site search functionality */}
      {/* <button>🔍</button> */}
      <Manage />
      <Settings />
      <button onClick={logout}>Logout</button>
    </section>
  );
}
export default User;
