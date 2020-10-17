import { apiUrl } from '../../lib/constants';

export default async function post(endpoint, body, user) {
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage["feathers-jwt"]}`,
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const result = await response.json();
    console.log(`Created ${endpoint}`);
    return result;
  }
  const result = await response.json();
  console.log('Encountered error..', result.error);
  return result.error;
}
