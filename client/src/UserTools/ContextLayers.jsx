import React, {useState} from 'react';
import { ViewContextLayer } from './context/ViewContextLayer';
import { UserContextLayer } from './context/UserContextLayer';
import UserApp from './UserApp';

function ContextLayers() {
  const [authed, setAuthed] = useState(false);

  return (
    <>
      <UserContextLayer setAuthed={setAuthed}>
        {authed && (
          <ViewContextLayer>
            <UserApp />
          </ViewContextLayer>
        )}
      </UserContextLayer>
    </>
  );
}

export default ContextLayers;
