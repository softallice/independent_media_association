import { apiUrl } from '../../lib/constants';

export default async function apiGetAll(endpoint) {
  console.log('Fetching data...');
  const response = await fetch(`${apiUrl}/${endpoint}/1`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${localStorage["feathers-jwt"]}`,
    },
  });
  console.log('Retrieved data...');
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  const result = await response.json();

  return result.error;
}