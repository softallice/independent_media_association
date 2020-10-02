import React from 'react';
import { LoremIpsum } from "lorem-ipsum";
import Header from './components/Header'
import Article from './components/Article'
import Authentication from './components/Authentication'
import feathers from '@feathersjs/client'
import io from 'socket.io-client';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// Establish a Socket.io connection
const socket = io('http://localhost:4000');

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();
client.configure(feathers.socketio(socket));

// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));

const login = () => {
  try {
    //Attempting to use existing authentication
    return client.reAuthenticate();
  } catch (error) {
    console.log("User is not authenticated :", error);
  }
};+

const main = () => {
  const auth = login();
  if(auth){
  // const users = await getAllUsers(auth);
  console.log(auth)
  console.log('User is authenticated', client.authentication);
  }
};

function App() {
  return (
    <div className="Site">
      {main()}
      {/* {console.log(auth)} */}
      <Header />
      <Authentication />
      <Article 
        key="1"
        title="Title"
        byline="Derek Holtzman"
        publishDate="9/30/2020"
        articleBody={lorem.generateParagraphs(4)}
      />
    </div>
  );
}

export default App;
