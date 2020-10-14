import { apiUrl } from '../lib/constants.js';

export default async function getUser(login) {
  console.log('Retrieving User...');
  const response = await fetch(`${apiUrl}/users/${login.user.id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${login.accessToken}`,
    },
  });
  if (response.ok) {
    const result = await response.json();
    console.log('Received User');
    // console.log("result", result);
    return result;
  }
  const result = await response.json();
  // console.log(result);
  return result.error;
}
