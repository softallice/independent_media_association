// Establish a Socket.io connection
const socket = io();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();
client.configure(feathers.socketio(socket));

// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));

const login = async () => {
  try {
    //Attempting to use existing authentication
    return await client.reAuthenticate();
  } catch (error) {
    console.log('User is not authenticated :', error);
  }
};

const main = async () => {
  const auth = await login();
  if(auth){
    const users = await getAllUsers(auth);
    console.log(auth);
    console.log('User is authenticated', client.authentication);
  }
};

async function getAllUsers(auth) {
  const response = await fetch('/users', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${auth.accessToken}`
    },
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const result = await response.json();
    return result.error;
  }
}

async function logout(){
  await client.logout();
  if (!client.authentication.authenticated){
    console.log('User is logged out');
  }
}

main();
