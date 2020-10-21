import { apiUrl } from '../../lib/constants';

export default async function apiGetOne(endpoint, id) {
  const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
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
