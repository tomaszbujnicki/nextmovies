import { useState, useEffect } from 'react';

const API_KEY = process.env.API_KEY;
const API_ROOT = 'https://api.themoviedb.org/3/';

const useFetch = (route, params = '') => {
  const url = `${API_ROOT}${route}?api_key=${API_KEY}${params}`;

  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error(`Http error: ${res.status}`);
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(undefined);
        setErr(err);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return [data, err];
};

export default useFetch;
