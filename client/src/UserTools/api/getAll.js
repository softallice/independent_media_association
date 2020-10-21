import { apiUrl } from '../../lib/constants';

export default async function apiGetAll(endpoint) {
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Origin':'http://localhost:3000/#',
      Authorization: `Bearer ${localStorage["feathers-jwt"]}`,
    },
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  const result = await response.json();
  return result.error;
}
