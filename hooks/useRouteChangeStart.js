import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRouteChangeStart = (callback) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', callback);

    return () => {
      router.events.off('routeChangeStart', callback);
    };
  }, [router.events, callback]);
};

export default useRouteChangeStart;
