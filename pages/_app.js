import { useEffect } from 'react';
import { scrollRestoration } from '../initialAppConfig';
import Head from 'next/head';
import VerticalMenu from '../containers/VerticalMenu';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    scrollRestoration();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <VerticalMenu />
    </>
  );
}

export default MyApp;
