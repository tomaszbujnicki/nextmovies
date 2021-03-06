const API_KEY = process.env.API_KEY;
const API_ROOT = 'https://api.themoviedb.org/3/';

async function getData(path, params = '') {
  const url = `${API_ROOT}${path}?api_key=${API_KEY}${params}`;
  console.log(url);
  const data = await fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Http error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      return null;
    });

  return data;
}
export default getData;
