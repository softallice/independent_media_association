import React, { useEffect } from 'react';
import client from './feathers-client'

//import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// });

async function getUser(login){
  const response = await fetch(`http://localhost:4000/users/${login.user.id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${login.accessToken}`
    },
  });
  console.log(response);
  if (response.ok) {
    const result = await response.json();
    console.log("result", result);
    return result;
  } else {
    const result = await response.json();
    console.log(result);
    return result.error;
  }
}
function App() {
  //const [login, setIsLoggedIn] = useState(null)
  useEffect(() => {

    // Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => {
      console.log("You are not logged in");
      //setIsLoggedIn(false) 
    });

    // On successful login
    client.on('authenticated', login => {
      //setIsLoggedIn(true)
      getUser(login)
      console.log(`You are logged in as ${login.user.name}!`)
    })

    client.on('logout', logout => {
      console.log('You have logged out')
    })

  })

  return (
    <div className="Site">
      <a href='http://localhost:4000/oauth/google'>Login with Google</a>
      <button onClick={client.logout}>Logout</button>
    </div>
  );
}

export default App;
