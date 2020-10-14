import { apiUrl } from '../../lib/constants';

export default async function postPost(post) {
  console.log('Adding new post...');
  const response = await fetch(`${apiUrl}/users/${login.user.id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${login.accessToken}`,
    },
    body: JSON.stringify(post),
  });
  if (response.ok) {
    const result = await response.json();
    console.log('Created Post');
    return result;
  }
  const result = await response.json();
  console.log('Encountered error posting..', result.error);
  return result.error;
}
