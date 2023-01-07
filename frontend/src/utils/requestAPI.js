const API_URL = import.meta.env.VITE_API_URL || '';

export default async function requestAPI(path, method, body = {}) {
  let requestOptions = {};
  const token = sessionStorage.getItem('token');
  switch (method) {
    case 'POST':
      requestOptions = {
        method: 'POST',
        cache: 'no-store',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
        }),
        body: JSON.stringify(body),
      };
      break;

    case 'GET':
      requestOptions = {
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
        },
      };
  }

  const data = await fetch(`${API_URL}${path}`, requestOptions);
  const response = await data.json();
  return response;
}
