import { useState, useEffect } from 'react';

const useFetch = (query) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }

    const url = `/api/${query}`;

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
        setData(null);
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  return data;
};

export default useFetch;
