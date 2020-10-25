import { apiUrl } from '../../lib/constants';

export default async function apiPatch(endpoint, body, id) {
    const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage["feathers-jwt"]}`,
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  const result = await response.json();
  return result.error;
}
