import { useEffect } from 'react';
import { scrollRestoration } from '../initialAppConfig';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    scrollRestoration();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
