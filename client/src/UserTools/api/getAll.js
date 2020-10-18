import { apiUrl } from '../../lib/constants';

export default async function getAll(endpoint) {
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
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
