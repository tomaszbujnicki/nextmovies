const API_KEY = process.env.API_KEY;
const API_ROOT = 'https://api.themoviedb.org/3/';

async function getData(route, params = '') {
  const url = `${API_ROOT}${route}?api_key=${API_KEY}${params}&language=en-US`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
export default getData;
